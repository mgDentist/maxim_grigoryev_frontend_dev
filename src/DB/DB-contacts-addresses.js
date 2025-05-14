const contactsAddresses = [
    { key: 'name', label: 'Name', description: 'Maxim Grigoryev', },
    { key: 'languages', label: 'My languages', description: 'English 🇬🇧 | Russian 🇷🇺 | Spanish 🇪🇸' },
    { key: 'location', label: 'Current location', description: 'Phuket, Thailand (TH) 🇹🇭', },
    { key: 'timeZone', label: 'Time zone', description: 'GMT+7', },
    { key: 'email', label: 'E-mail', description: 'maxgrigorev.front@gmail.com', },
];

const contactsQRs = [
    { name: 'Telegram', route: 'qr-codes/tg-qr.jpg', url: 'https://t.me/maksimgrigorev09', alt: 'telegram address qr' },
    { name: 'GitHub', route: 'qr-codes/gh-qr.jpg', url: 'https://github.com/mgDentist', alt: 'github address qr' },
    { name: 'Linkedin', route: 'qr-codes/in-qr.jpg', url: 'https://www.linkedin.com/in/maximgrigorev/', alt: 'linkedin address qr' },
    { name: 'Instagram', route: 'qr-codes/inst-qr.jpg', url: 'https://www.instagram.com/maximize777/profilecard/?igsh=ZDVxZGx2bmNhcmFr', alt: 'instagram address qr' },
    { name: 'Whatsapp', route: 'qr-codes/ws-qr.jpg', url: 'https://wa.me/+79253230757', alt: 'whatsapp address qr' },
];

export { contactsAddresses, contactsQRs };