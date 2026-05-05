import zipfile
import xml.etree.ElementTree as ET
import sys

def extract_text_from_docx(docx_path):
    document_xml = 'word/document.xml'
    word_namespace = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
    para = word_namespace + 'p'
    text = word_namespace + 't'
    
    with zipfile.ZipFile(docx_path) as docx:
        tree = ET.XML(docx.read(document_xml))
    
    paragraphs = []
    for paragraph in tree.iter(para):
        texts = [node.text for node in paragraph.iter(text) if node.text]
        if texts:
            paragraphs.append(''.join(texts))
    return '\n'.join(paragraphs)

with open('docx_output.txt', 'w', encoding='utf-8') as f:
    f.write(extract_text_from_docx(sys.argv[1]))
