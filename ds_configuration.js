// ds_configuration.js -- configuration information
// Either fill in the data below or set the environment variables
//
const env = process.env;

exports.config = {
    dsClientId: process.env.DS_CLIENT_ID || '{CLIENT_ID}' // The app's DocuSign integration key
  , dsClientSecret: process.env.DS_CLIENT_SECRET || '{CLIENT_SECRET}' // The app's DocuSign integration key's secret
  , signerEmail: process.env.DS_SIGNER_EMAIL || '{USER_EMAIL}'
  , signerName: process.env.DS_SIGNER_NAME || '{USER_NAME}'
  , appUrl: process.env.DS_APP_URL || '{APP_URL}'
  , production: false
  , debug: true // Send debugging statements to console
  , sessionSecret: '12345' // Secret for encrypting session cookie content
  , allowSilentAuthentication: true // a user can be silently authenticated if they have an 
    // active login session on another tab of the same browser

  , targetAccountId: null // Set if you want a specific DocuSign AccountId, If null, the user's default account will be used.
  , demoDocPath: 'demo_documents'
  , docDocx: 'World_Wide_Corp_Battle_Plan_Trafalgar.docx'
  , docPdf:  'World_Wide_Corp_lorem.pdf'

}
