const contactsAddresses = [
    { key: 'name', label: 'Name', description: 'Maxim Grigoryev', },
    { key: 'location', label: 'Current location', description: 'Tbilisi, Georgia (GE)', },
    { key: 'timeZone', label: 'Time zone', description: 'GMT+4', },
    { key: 'email', label: 'E-mail', description: 'maxgrigorev.front@gmail.com', },
];

const contactsQRs = [
    { name: 'Telegram', route: 'qr-codes/tg-qr.jpg', url: '', alt: 'telegram address qr' },
    { name: 'GitHub', route: 'qr-codes/gh-qr.jpg', url: '', alt: 'github address qr' },
    { name: 'Linkedin', route: 'qr-codes/in-qr.jpg', url: '', alt: 'linkedin address qr' },
    { name: 'Instagram', route: 'qr-codes/inst-qr.jpg', url: '', alt: 'instagram address qr' },
    { name: 'Whatsapp', route: 'qr-codes/ws-qr.jpg', url: '', alt: 'whatsapp address qr' },
];

export { contactsAddresses, contactsQRs };