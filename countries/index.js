const countries = [
    {
      value:"Afghanistan",
      name:"Afghanistan"
    },
    {
      value:"Albania",
      name:"Albania"
    },
    {
      value:"Algeria",
      name:"Algeria"
    },
    {
      value:"Andorra",
      name:"Andorra"
    },
    {
      value:"Angola",
      name:"Angola"
    },
    {
      value:"Antigua and Barbuda",
      name:"Antigua and Barbuda"
    },
    {
      value:"Argentina",
      name:"Argentina"
    },
    {
      value:"Armenia",
      name:"Armenia"
    },
    {
      value:"Australia",
      name:"Australia"
    },
    {
      value:"Austria",
      name:"Austria"
    },
    {
      value:"Azerbaijan",
      name:"Azerbaijan"
    },
    {
      value:"Bahamas",
      name:"Bahamas"
    },
    {
      value:"Bahrain",
      name:"Bahrain"
    },
    {
      value:"Bangladesh",
      name:"Bangladesh"
    },
    {
      value:"Barbados",
      name:"Barbados"
    },
    {
      value:"Belarus",
      name:"Belarus"
    },
    {
      value:"Belgium",
      name:"Belgium"
    },
    {
      value:"Bermuda",
      name:"Bermuda"
    },
    {
      value:"Bhutan",
      name:"Bhutan"
    },
    {
      value:"Bolivia",
      name:"Bolivia"
    },
    {
      value:"Bosnia and Herzegovina",
      name:"Bosnia and Herzegovina"
    },
    {
      value:"Botswana",
      name:"Botswana"
    },
    {
      value:"Bouvet Island",
      name:"Bouvet Island"
    },
    {
      value:"Brazil",
      name:"Brazil"
    },
    {
      value:"Bulgaria",
      name:"Bulgaria"
    },
    {
      value:"Burkina Faso",
      name:"Burkina Faso"
    },
    {
      value:"Burundi",
      name:"Burundi"
    },
    {
      value:"Cambodia",
      name:"Cambodia"
    },
    {
      value:"Cameroon",
      name:"Cameroon"
    },
    {
      value:"Canada",
      name:"Canada"
    },
    {
      value:"Cape Verde",
      name:"Cape Verde"
    },
    {
      value:"Cayman Islands",
      name:"Cayman Islands"
    },
    {
      value:"Chad",
      name:"Chad"
    },
    {
      value:"Chile",
      name:"Chile"
    },
    {
      value:"China",
      name:"China"
    },
    {
      value:"Colombia",
      name:"Colombia"
    },
    {
      value:"Comoros",
      name:"Comoros"
    },
    {
      value:"Congo",
      name:"Congo"
    },
    {
      value:"Costa Rica",
      name:"Costa Rica"
    },
    {
      value:"Côte d'Ivoire",
      name:"Côte d'Ivoire"
    },
    {
      value:"Croatia",
      name:"Croatia"
    },
    {
      value:"Cuba",
      name:"Cuba"
    },
    {
      value:"Curaçao",
      name:"Curaçao"
    },
    {
      value:"Cyprus",
      name:"Cyprus"
    },
    {
      value:"Czech Republic",
      name:"Czech Republic"
    },
    {
      value:"Denmark",
      name:"Denmark"
    },
    {
      value:"Djibouti",
      name:"Djibouti"
    },
    {
      value:"Dominica",
      name:"Dominica"
    },
    {
      value:"Dominican Republic",
      name:"Dominican Republic"
    },
    {
      value:"Ecuador",
      name:"Ecuador"
    },
    {
      value:"Egypt",
      name:"Egypt"
    },
    {
      value:"El Salvador",
      name:"El Salvador"
    },
    {
      value:"Equatorial Guinea",
      name:"Equatorial Guinea"
    },
    {
      value:"Eritrea",
      name:"Eritrea"
    },
    {
      value:"Estonia",
      name:"Estonia"
    },
    {
      value:"Ethiopia",
      name:"Ethiopia"
    },
    {
      value:"Faroe Islands",
      name:"Faroe Islands"
    },
    {
      value:"Fiji",
      name:"Fiji"
    },
    {
      value:"Finland",
      name:"Finland"
    },
    {
      value:"France",
      name:"France"
    },
    {
      value:"French Guiana",
      name:"French Guiana"
    },
    {
      value:"French Polynesia",
      name:"French Polynesia"
    },
    {
      value:"Gabon",
      name:"Gabon"
    },
    {
      value:"Gambia",
      name:"Gambia"
    },
    {
      value:"Georgia",
      name:"Georgia"
    },
    {
      value:"Germany",
      name:"Germany"
    },
    {
      value:"Ghana",
      name:"Ghana"
    },
    {
      value:"Gibraltar",
      name:"Gibraltar"
    },
    {
      value:"Greece",
      name:"Greece"
    },
    {
      value:"Greenland",
      name:"Greenland"
    },
    {
      value:"Grenada",
      name:"Grenada"
    },
    {
      value:"Guadeloupe",
      name:"Guadeloupe"
    },
    {
      value:"Guam",
      name:"Guam"
    },
    {
      value:"Guatemala",
      name:"Guatemala"
    },
    {
      value:"Guernsey",
      name:"Guernsey"
    },
    {
      value:"Guinea",
      name:"Guinea"
    },
    {
      value:"Guinea-Bissau",
      name:"Guinea-Bissau"
    },
    {
      value:"Guyana",
      name:"Guyana"
    },
    {
      value:"Haiti",
      name:"Haiti"
    },
    {
      value:"Honduras",
      name:"Honduras"
    },
    {
      value:"Hong Kong",
      name:"Hong Kong"
    },
    {
      value:"Hungary",
      name:"Hungary"
    },
    {
      value:"Iceland",
      name:"Iceland"
    },
    {
      value:"India",
      name:"India"
    },
    {
      value:"Indonesia",
      name:"Indonesia"
    },
    {
      value:"Iran",
      name:"Iran"
    },
    {
      value:"Iraq",
      name:"Iraq"
    },
    {
      value:"Ireland",
      name:"Ireland"
    },
    {
      value:"Israel",
      name:"Israel"
    },
    {
      value:"Italy",
      name:"Italy"
    },
    {
      value:"Jamaica",
      name:"Jamaica"
    },
    {
      value:"Japan",
      name:"Japan"
    },
    {
      value:"Jersey",
      name:"Jersey"
    },
    {
      value:"Jordan",
      name:"Jordan"
    },
    {
      value:"Kazakhstan",
      name:"Kazakhstan"
    },
    {
      value:"Kenya",
      name:"Kenya"
    },
    {
      value:"Kiribati",
      name:"Kiribati"
    },
    {
      value:"Korea, Democratic People's Republic of",
      name:"Korea, Democratic People's Republic of"
    },
    {
      value:"Korea, Republic of",
      name:"Korea, Republic of"
    },
    {
      value:"Kuwait",
      name:"Kuwait"
    },
    {
      value:"Kyrgyzstan",
      name:"Kyrgyzstan"
    },
    {
      value:"Latvia",
      name:"Latvia"
    },
    {
      value:"Lebanon",
      name:"Lebanon"
    },
    {
      value:"Lesotho",
      name:"Lesotho"
    },
    {
      value:"Liberia",
      name:"Liberia"
    },
    {
      value:"Libya",
      name:"Libya"
    },
    {
      value:"Liechtenstein",
      name:"Liechtenstein"
    },
    {
      value:"Lithuania",
      name:"Lithuania"
    },
    {
      value:"Luxembourg",
      name:"Luxembourg"
    },
    {
      value:"Macao",
      name:"Macao"
    },
    {
      value:"Macedonia",
      name:"Macedonia"
    },
    {
      value:"Madagascar",
      name:"Madagascar"
    },
    {
      value:"Malawi",
      name:"Malawi"
    },
    {
      value:"Malaysia",
      name:"Malaysia"
    },
    {
      value:"Maldives",
      name:"Maldives"
    },
    {
      value:"Mali",
      name:"Mali"
    },
    {
      value:"Malta",
      name:"Malta"
    },
    {
      value:"Marshall Islands",
      name:"Marshall Islands"
    },
    {
      value:"Martinique",
      name:"Martinique"
    },
    {
      value:"Mauritania",
      name:"Mauritania"
    },
    {
      value:"Mauritius",
      name:"Mauritius"
    },
    {
      value:"Mayotte",
      name:"Mayotte"
    },
    {
      value:"Mexico",
      name:"Mexico"
    },
    {
      value:"Moldova, Republic of",
      name:"Moldova, Republic of"
    },
    {
      value:"Monaco",
      name:"Monaco"
    },
    {
      value:"Mongolia",
      name:"Mongolia"
    },
    {
      value:"Montenegro",
      name:"Montenegro"
    },
    {
      value:"Montserrat",
      name:"Montserrat"
    },
    {
      value:"Morocco",
      name:"Morocco"
    },
    {
      value:"Mozambique",
      name:"Mozambique"
    },
    {
      value:"Myanmar",
      name:"Myanmar"
    },
    {
      value:"Namibia",
      name:"Namibia"
    },
    {
      value:"Nauru",
      name:"Nauru"
    },
    {
      value:"Nepal",
      name:"Nepal"
    },
    {
      value:"Netherlands",
      name:"Netherlands"
    },
    {
      value:"New Caledonia",
      name:"New Caledonia"
    },
    {
      value:"New Zealand",
      name:"New Zealand"
    },
    {
      value:"Nicaragua",
      name:"Nicaragua"
    },
    {
      value:"Niger",
      name:"Niger"
    },
    {
      value:"Nigeria",
      name:"Nigeria"
    },
    {
      value:"Niue",
      name:"Niue"
    },
    {
      value:"Norfolk Island",
      name:"Norfolk Island"
    },
    {
      value:"Norway",
      name:"Norway"
    },
    {
      value:"Oman",
      name:"Oman"
    },
    {
      value:"Pakistan",
      name:"Pakistan"
    },
    {
      value:"Palau",
      name:"Palau"
    },
    {
      value:"Palestine, State of",
      name:"Palestine, State of"
    },
    {
      value:"Panama",
      name:"Panama"
    },
    {
      value:"Papua New Guinea",
      name:"Papua New Guinea"
    },
    {
      value:"Paraguay",
      name:"Paraguay"
    },
    {
      value:"Peru",
      name:"Peru"
    },
    {
      value:"Philippines",
      name:"Philippines"
    },
    {
      value:"Pitcairn",
      name:"Pitcairn"
    },
    {
      value:"Poland",
      name:"Poland"
    },
    {
      value:"Portugal",
      name:"Portugal"
    },
    {
      value:"Puerto Rico",
      name:"Puerto Rico"
    },
    {
      value:"Qatar",
      name:"Qatar"
    },
    {
      value:"Réunion",
      name:"Réunion"
    },
    {
      value:"Romania",
      name:"Romania"
    },
    {
      value:"Russian Federation",
      name:"Russian Federation"
    },
    {
      value:"Rwanda",
      name:"Rwanda"
    },
    {
      value:"Saint Barthélemy",
      name:"Saint Barthélemy"
    },
    {
      value:"Samoa",
      name:"Samoa"
    },
    {
      value:"San Marino",
      name:"San Marino"
    },
    {
      value:"Saudi Arabia",
      name:"Saudi Arabia"
    },
    {
      value:"Senegal",
      name:"Senegal"
    },
    {
      value:"Serbia",
      name:"Serbia"
    },
    {
      value:"Seychelles",
      name:"Seychelles"
    },
    {
      value:"Sierra Leone",
      name:"Sierra Leone"
    },
    {
      value:"Singapore",
      name:"Singapore"
    },
    {
      value:"Slovakia",
      name:"Slovakia"
    },
    {
      value:"Slovenia",
      name:"Slovenia"
    },
    {
      value:"Solomon Islands",
      name:"Solomon Islands"
    },
    {
      value:"Somalia",
      name:"Somalia"
    },
    {
      value:"South Africa",
      name:"South Africa"
    },
    {
      value:"South Sudan",
      name:"South Sudan"
    },
    {
      value:"Spain",
      name:"Spain"
    },
    {
      value:"Sri Lanka",
      name:"Sri Lanka"
    },
    {
      value:"Sudan",
      name:"Sudan"
    },
    {
      value:"Suriname",
      name:"Suriname"
    },
    {
      value:"Svalbard and Jan Mayen",
      name:"Svalbard and Jan Mayen"
    },
    {
      value:"Swaziland",
      name:"Swaziland"
    },
    {
      value:"Sweden",
      name:"Sweden"
    },
    {
      value:"Switzerland",
      name:"Switzerland"
    },
    {
      value:"Syrian Arab Republic",
      name:"Syrian Arab Republic"
    },
    {
      value:"Taiwan, Province of China",
      name:"Taiwan, Province of China"
    },
    {
      value:"Tajikistan",
      name:"Tajikistan"
    },
    {
      value:"Tanzania",
      name:"Tanzania"
    },
    {
      value:"Thailand",
      name:"Thailand"
    },
    {
      value:"Timor-Leste",
      name:"Timor-Leste"
    },
    {
      value:"Togo",
      name:"Togo"
    },
    {
      value:"Tokelau",
      name:"Tokelau"
    },
    {
      value:"Tonga",
      name:"Tonga"
    },
    {
      value:"Trinidad and Tobago",
      name:"Trinidad and Tobago"
    },
    {
      value:"Tunisia",
      name:"Tunisia"
    },
    {
      value:"Turkey",
      name:"Turkey"
    },
    {
      value:"Turkmenistan",
      name:"Turkmenistan"
    },
    {
      value:"Tuvalu",
      name:"Tuvalu"
    },
    {
      value:"Uganda",
      name:"Uganda"
    },
    {
      value:"Ukraine",
      name:"Ukraine"
    },
    {
      value:"United Arab Emirates",
      name:"United Arab Emirates"
    },
    {
      value:"United Kingdom",
      name:"United Kingdom"
    },
    {
      value:"United States",
      name:"United States"
    },
    {
      value:"Uruguay",
      name:"Uruguay"
    },
    {
      value:"Uzbekistan",
      name:"Uzbekistan"
    },
    {
      value:"Vanuatu",
      name:"Vanuatu"
    },
    {
      value:"Venezuela",
      name:"Venezuela"
    },
    {
      value:"Viet Nam",
      name:"Viet Nam"
    },
    {
      value:"Western Sahara",
      name:"Western Sahara"
    },
    {
      value:"Yemen",
      name:"Yemen"
    },
    {
      value:"Zambia",
      name:"Zambia"
    },
    {
      value:"Zimbabwe",
      name:"Zimbabwe"
    }
  ]
  
  export const countries;