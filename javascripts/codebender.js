function codebenderInit() {
    // Atmel codebender editor
    var editorOptions = {
        id: 0,
        CODEBENDER_DOMAIN: 'https://atmel-xplained-proteus.codebender.cc',
        iframe: document.getElementById('atmel-codebender-editor').contentWindow
    };
    var codebenderEditorClient = new CodebenderClient(editorOptions);
    var codebenderEditorFilelist = {
        'Blink.ino': '/*\nTurns on an LED on for one second, then off for one second, repeatedly.\nThis example code is in the public domain.\n*/\n// Pin 13 has an LED connected on most Arduino boards.\n// give it a name:\nint led = 13;\n\n// the setup routine runs once when you press reset:\nvoid setup() \n{\n// initialize the digital pin as an output.\n\tpinMode(led, OUTPUT);\n}\n// the loop routine runs over and over again forever:\n\nvoid loop() {\n\tdigitalWrite(led, HIGH);   // turn the LED on (HIGH is the voltage level)\n\tdelay(1000);               // wait for a second\n\tdigitalWrite(led, LOW);    // turn the LED off by making the voltage LOW\n\tdelay(1000);               // wait for a second\n}'
    };
    codebenderEditorClient.setFilelist(codebenderEditorFilelist);

    // Atmel codebender Blockly
    var blocklyOptions = {
        id: 1,
        CODEBENDER_DOMAIN: 'https://atmel-xplained-proteus-blockly.codebender.cc',
        iframe: document.getElementById('atmel-codebender-blockly').contentWindow
    };
    var codebenderBlocklyClient = new CodebenderClient(blocklyOptions);
    var codebenderBlocklyFilelist = {
        'Blink.ino': '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="inout_buildin_led" id="1" x="160" y="120"><field name="STAT">HIGH</field><next><block type="base_delay" id="2"><value name="DELAY_TIME"><block type="math_number" id="3"><field name="NUM">1000</field></block></value><next><block type="inout_buildin_led" id="4"><field name="STAT">LOW</field><next><block type="base_delay" id="5"><value name="DELAY_TIME"><block type="math_number" id="6"><field name="NUM">1000</field></block></value></block></next></block></next></block></next></block></xml>'
    };
    codebenderBlocklyClient.setFilelist(codebenderBlocklyFilelist);
}

window.onload = codebenderInit;
