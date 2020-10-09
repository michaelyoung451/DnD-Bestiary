<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/" mode="#default">
        <html>
        <head>
            <title>DnD Bestiary</title>
        </head>
        <body>
            <h1>DnD Fifth Edition Bestiary</h1>
            <div id="demo">
                <button type="button" onclick="loadDoc()">Change Content</button>
            </div>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>