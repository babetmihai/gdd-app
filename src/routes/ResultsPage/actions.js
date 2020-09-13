import { HeadingLevel, Document, Paragraph, Packer, TextRun } from 'docx'
import RESULT_TEMPLATE from './template'
import { t } from 'core/intl'

export const generateDocx = ({ results }) => {
  const doc = new Document()
  doc.addSection({
    children: RESULT_TEMPLATE
      .map((node) => composeDoc({ node }))
      .flat(999)
      .filter(Boolean)
  })
  Packer.toBlob(doc).then((blob) => {
    // saveAs from FileSaver will download the file
    downloadFile(blob, 'example.docx')
  })
}

export const composeDoc = ({ node }) => {
  const { id, children = [], tagName } = node

  switch (true) {
    case (tagName === 'p'): {
      return new Paragraph({
        children: [new TextRun({ text: `${t(id)}\n` })]
      })
    }
    case (tagName === 'section'): {
      return children
        .map((childNode) => composeDoc({ node: childNode }))
        .filter(Boolean)
    }
    case (tagName.startsWith('h')): {
      const no = tagName.slice(tagName.length - 1)
      return new Paragraph({
        heading: HeadingLevel[`HEADING_${no}`],
        text: t(id)
      })
    }
    default: return null
  }
}

const downloadFile = (blob, filename) => {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, filename)
  } else {
    const a = document.createElement('a')
    document.body.appendChild(a)
    const url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = filename
    a.click()
    setTimeout(() => {
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    }, 0)
  }
}