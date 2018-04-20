import React from 'react'

export default function Preview({ areaText, showPreview, showText }) {
    return <div>
        <button id="preview-toggle" onClick={showText}>Show Preview</button>
        {
            showPreview
                ? false :
                <section id="application-preview" className="text">{areaText}</section>
        }
    </div>
}