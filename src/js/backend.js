const UPLOAD_CONTACTS_URL = 'https://raw.githubusercontent.com/gregort94/DATA/master/users.json';


const getContactsData = () => {
   return fetch(UPLOAD_CONTACTS_URL).then(resolve => resolve.json())
}


export { getContactsData }