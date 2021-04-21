export function regexGetBasedOnCountry(country) {
  let regex = null;

  switch (country) {
    case 'Bulgaria':
    case 'Afghanistan':
    case 'Albania':
    case 'Argentina':
    case 'Armenia':
    case 'Australia':
    case 'Austria':
    case 'Bangladesh':
    case 'Belgium':
    case 'Cape Verde':
    case 'Cocos (Keeling) Island':
    case 'Christmas Island':
    case 'Denmark':
    case 'Cyprus':
    case 'Ethiopia':
    case 'El Salvador':
    case 'Georgia':
    case 'Germany':
    case 'Greenland':
    case 'Guinea Bissau':
    case 'Haiti':
    case 'Hungary':
    case 'Liberia':
    case 'Liechtenstein':
    case 'Luxembourg':
    case 'Mozambique':
    case 'New Zealand':
    case 'Niger':
    case 'Norfolk Island':
    case 'North Macedonia':
    case 'Norway':
    case 'Panama':
    case 'Paraguay':
    case 'Philippines':
    case 'Portugal':
    case 'Singapore':
    case 'South Africa':
    case 'Switzerland':
    case 'Svalbard and Jan Mayen':
    case 'Tunisia':
    case 'Bahrain':
    case 'Slovenia':
    case 'Venezuela':
      regex = /^\d{4}$/;
      break;
    case 'Vatican':
      regex = /00120/;
      break;

    case 'Guadeloupe':
      regex = /^971\d{2}$/;
      break;

    case 'Martinique':
      regex = /^972\d{2}$/;
      break;

    case 'French Guiana':
      regex = /^973\d{2}$/;
      break;

    case 'Réunion':
      regex = /^974\d{2}$/;
      break;

    case 'Mayotte':
      regex = /^976\d{2}$/;
      break;

    case 'Monaco':
      regex = /^980\d{2}$/;
      break;

    case 'Wallis and Futuna':
      regex = /^986\d{2}$/;
      break;

    case 'French Polynesia':
      regex = /^987\d{2}$/;
      break;

    case 'New Caledonia':
      regex = /^988\d{2}$/;
      break;

    case 'San Marino':
      regex = /^4789\d{1}$/;
      break;

    case 'United States Minor Outlying Islands':
      regex = /^96898$/;
      break;

    case 'Saint Barthélemy':
      regex = /^97133$/;
      break;

    case 'Saint Martin':
      regex = /^97150$/;
      break;

    case 'Saint Pierre and Miquelon':
      regex = /^97500$/;
      break;

    case 'Cambodia':
      regex = /^120000$/;
      break;

    case 'United Kingdom':
    case 'British Indian Ocean Territory':
    case 'British Antarctic Territory':
      regex = /^[A-Z]{1,2}[0-9R][0-9A-Z]? [0-9][ABD-HJLNP-UW-Z]{2}$/;
      break;

    case 'Somalia':
      regex = /^[A-Z]{2}? \d{5}$/;
      break;

    case 'Ghana':
      regex = /^[A-Z]{2}?-\d{4}?-\d{4}$/;
      break;

    case 'Malta':
      regex = /^[A-Z]{3}? \d{4}$/;
      break;

    case 'Saint Helena, Ascension and Tristan da Cunha':
      regex = /^[A-Z]{4}? 1\w{2}$/;
      break;

    case 'Guernsey':
      regex = /^[A-Z]{2}\d{1}? \d{1}[A-Z]{2}$/;
      break;

    case 'Brunei':
      regex = /^[A-Z]{2}\d{4}$/;
      break;

    case 'Honduras':
      regex = /^[A-Z]{2}\d{4}$/ || /^\d{5}$/;
      break;

    case 'Anguilla':
      regex = /[A-Z]{1}I-2640$/;
      break;

    case 'Canada':
      regex = /[A-Z]{1}\d{1}[A-Z]{1}? \d{1}[A-Z]{1}\d{1}$/;
      break;

    case 'Ireland':
      regex = /[A-Z]{2}\d{1,2}? \w{5,10}$/;
      break;

    case 'Eswatini':
      regex = /[A-Z]{1}\d{3}$/;
      break;

    case 'Azerbaijan':
      regex = /[A-Z]{2}? \d{4}$/;
      break;

    case 'Faroe Islands':
      regex = /[A-Z]{2}?-\d{3}$/;
      break;

    case 'Latvia':
      regex = /[A-Z]{2}?-\d{4}$/;
      break;

    case 'Lithuania':
      regex = /[A-Z]{2}?-\d{5}$/;
      break;

    case 'Isle of Man':
    case 'Jersey':
      regex = /[A-Z]{2}\d{1}? \d{1}[A-Z]{2}$/;
      break;

    case 'Saint Lucia':
      regex = /[A-Z]{2}\d{1}?-\d{4}$/;
      break;

    case 'Andorra':
      regex = /[A-Z]{2}\d{1}\d{3}$/;
      break;

    case 'British Virgin Islands':
    case 'Saint Vincent and the Grenadines':
    case 'Samoa':
    case 'Moldova':
      regex = /[A-Z]{2}\d{4}$/;
      break;

    case 'Barbados':
      regex = /[A-Z]{2}\d{5}$/;
      break;

    case 'Falkland Islands (Malvinas)':
      regex = /FIQQ 1ZZ/;
      break;

    case 'Gibraltar':
      regex = /GX11 1[A-Z]{2}$/;
      break;

    case 'Montserrat':
      regex = /MSR \d{4}$/;
      break;

    case 'Jamaica':
      regex = /\d{2}$/;
      break;

    case 'Poland':
      regex = /\d{2}?-\d{3}$/;
      break;

    case 'Guinea':
    case 'Iceland':
    case 'Lesotho':
    case 'Madagascar':
    case 'Oman':
    case 'Palestine':
    case 'Papua New Guinea':
      regex = /\d{3}$/;
      break;

    case 'Czech Republic':
    case 'Greece':
    case 'Slovakia':
    case 'Sweden':
      regex = /\d{3}? \d{2}/;
      break;

    case 'Japan':
    case 'Taiwan':
      regex = /\d{3}?-\d{2}/;
      break;

    case 'Algeria':
    case 'Bhutan':
    case 'Bosnia and Herzegovina':
    case 'Costa Rica':
    case 'Croatia':
    case 'Cuba':
    case 'Dominican Republic':
    case 'Egypt':
    case 'Estonia':
    case 'Finland':
    case 'France':
    case 'Guatemala':
    case 'Indonesia':
    case 'Iraq':
    case 'Italy':
    case 'Jordan':
    case 'Kenya':
    case 'Korea, South':
    case 'Kuwait':
    case 'Laos':
    case 'Malaysia':
    case 'Maldives':
    case 'Mauritius':
    case 'Mexico':
    case 'Mongolia':
    case 'Montenegro':
    case 'Morocco':
    case 'Myanmar':
    case 'Nepal':
    case 'Nicaragua':
    case 'Pakistan':
    case 'Senegal':
    case 'Serbia':
    case 'Spain':
    case 'Sri Lanka':
    case 'Sudan':
    case 'Tanzania':
    case 'Thailand':
    case 'Turkey':
    case 'Ukraine':
    case 'Uruguay':
    case 'Zambia':
    case 'Saudi Arabia':
    case 'Iran':
    case 'Peru':
    case 'Åland Islands':
    case 'Lebanon':
    case 'Brazil':
    case 'American Samoa':
    case 'Guam':
    case 'Marshall Islands':
    case 'Micronesia':
    case 'Northern Mariana Islands':
    case 'Palau':
    case 'Puerto Rico':
    case 'United States':
    case 'U.S. Virgin Islands':
      regex = /\d{5}$/;
      break;

    case 'Belarus':
    case 'China':
    case 'Colombia':
    case 'Ecuador':
    case 'Kazakhstan':
    case 'Kyrgyzstan':
    case 'Nigeria':
    case 'Romania':
    case 'Russia':
    case 'Tajikistan':
    case 'Trinidad and Tobago':
    case 'Turkmenistan':
    case 'Uzbekistan':
    case 'Vietnam':
    case 'India':
      regex = /\d{6}$/;
      break;

    case 'Israel':
    case 'Chile':
      regex = /\d{7}$/;
      break;

    case 'Pitcairn Islands':
      regex = /PCRN 1ZZ/;
      break;

    case 'South Georgia and the South Sandwich Islands':
      regex = /SIQQ 1ZZ/;
      break;

    case 'Turks and Caicos Islands':
      regex = /TKCA 1ZZ/;
      break;

    default:
      break;
  }

  return regex;
}
