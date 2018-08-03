const escapeLabelText = unescapedText => {
    let escapedText = unescapedText.replace(/\s/g, '');
    if (escapedText === 'DisplayName') {
        return 'displayname';
    }
    escapedText = escapedText.charAt(0).toLowerCase() + escapedText.slice(1);
    return escapedText;
}

const labelDisplayFormat = unformattedText => {
    let formattedText = unformattedText;
    switch (unformattedText) {
        case 'displayname':
            formattedText = 'Display Name';
            break;
        case 'lastLogon':
            formattedText = 'Last Log On';
            break;
        case 'homeDirectory':
            formattedText = 'Home Directory';
            break;
        case 'managerId':
            formattedText = 'Manager Id';
            break;
        case 'os':
            formattedText = "OS";
            break;
        case "osVersion":
            formattedText = "OS Version";
            break;
        case 'dnsHostName':
            formattedText = "DNS Hostname";
            break;
        case 'ipAddress':
            formattedText = "IP Address";
            break;
        case 'email':
        case 'id':
        case 'department':
        case 'title':
        case 'domain':
        default:
            formattedText = unformattedText.charAt(0).toUpperCase() +unformattedText.slice(1);
            break;
    }
    return formattedText;
}

const numberDisplayFormat = number => (
    number >= 1000 ? (number / 1000).toFixed(1) + "k" : number
);

export {
    escapeLabelText,
    labelDisplayFormat,
    numberDisplayFormat
}