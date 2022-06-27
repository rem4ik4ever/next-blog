import {GoogleSpreadsheet} from 'google-spreadsheet'
import keys from './rem-blog-b5d4ff079041.json'

const doc = new GoogleSpreadsheet('1HlfXGv4Xi79ADkRdzKRSTVqknARuUuqCFKHGaSN8JAo');

export const addSubscriptionEmail = async (email:string) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  });
  
  await doc.loadInfo(); // loads document properties and worksheets
  
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  await sheet.addRow({ email });
  return true
}
