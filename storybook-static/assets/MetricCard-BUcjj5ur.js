import { j as p } from './jsx-runtime-Cf8x2fCZ.js';
import { r as d } from './index-t5q4d8OJ.js';
import './Input-Z5ELXsou.js';
import { c as V } from './utils-BLSKlp9E.js';
import { c as z } from './createLucideIcon-DYb0enIN.js';
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ne = z('TrendingDown', [
	['polyline', { points: '22 17 13.5 8.5 8.5 13.5 2 7', key: '1r2t7k' }],
	['polyline', { points: '16 17 22 17 22 11', key: '11uiuu' }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ce = z('TrendingUp', [
		['polyline', { points: '22 7 13.5 15.5 8.5 10.5 2 17', key: '126l90' }],
		['polyline', { points: '16 7 22 7 22 13', key: 'kwv8wd' }],
	]),
	T = (e, r = 0) => {
		if (!e) return '-';
		const a = Math.max(0, Math.min(20, r));
		return new Intl.NumberFormat('en-US', { minimumFractionDigits: a, maximumFractionDigits: a }).format(e);
	},
	Mr = (e) =>
		e >= 1e9
			? (e / 1e9).toFixed(1).replace(/\.0$/, '') + 'B'
			: e >= 1e6
				? (e / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'
				: e >= 1e3
					? (e / 1e3).toFixed(1).replace(/\.0$/, '') + 'k'
					: e.toLocaleString();
var b = {},
	I;
function te() {
	if (I) return b;
	I = 1;
	const e = {
			AD: { countryName: 'Andorra', currency: 'EUR', symbol: '€', numericCode: 978 },
			AE: { countryName: 'United Arab Emirates', currency: 'AED', symbol: 'AED', dateFormat: 'dd/MM/yyyy', numericCode: 784 },
			AF: { countryName: 'Afghanistan', currency: 'AFN', symbol: 'Af', numericCode: 971 },
			AG: { countryName: 'Antigua and Barbuda', currency: 'XCD', symbol: 'XCD', numericCode: 951 },
			AI: { countryName: 'Anguilla', currency: 'XCD', symbol: 'XCD', numericCode: 951 },
			AL: { countryName: 'Albania', currency: 'ALL', symbol: 'ALL', dateFormat: 'yyyy-MM-dd', numericCode: 8 },
			AM: { countryName: 'Armenia', currency: 'AMD', symbol: 'AMD', numericCode: 51 },
			AO: { countryName: 'Angola', currency: 'AOA', symbol: 'AOA', numericCode: 973 },
			AR: { countryName: 'Argentina', currency: 'ARS', symbol: 'AR$', dateFormat: 'dd/MM/yyyy', numericCode: 32 },
			AS: { countryName: 'American Samoa', currency: 'USD', symbol: '$', numericCode: 840 },
			AT: { countryName: 'Austria', currency: 'EUR', symbol: '€', dateFormat: 'dd.MM.yyyy', numericCode: 978 },
			AU: { countryName: 'Australia', currency: 'AUD', symbol: '$', dateFormat: 'd/MM/yyyy', numericCode: 36 },
			AW: { countryName: 'Aruba', currency: 'AWG', symbol: 'AWG', numericCode: 533 },
			AX: { countryName: 'Aland Islands', currency: 'EUR', symbol: '€', numericCode: 978 },
			AZ: { countryName: 'Azerbaijan', currency: 'AZN', symbol: 'man.', numericCode: 944 },
			BA: { countryName: 'Bosnia and Herzegovina', currency: 'BAM', symbol: 'KM', dateFormat: 'yyyy-MM-dd', numericCode: 977 },
			BB: { countryName: 'Barbados', currency: 'BBD', symbol: 'BBD', numericCode: 52 },
			BD: { countryName: 'Bangladesh', currency: 'BDT', symbol: 'Tk', numericCode: 50 },
			BE: { countryName: 'Belgium', currency: 'EUR', symbol: '€', dateFormat: 'd/MM/yyyy', numericCode: 978 },
			BF: { countryName: 'Burkina Faso', currency: 'XOF', symbol: 'CFA', numericCode: 952 },
			BG: { countryName: 'Bulgaria', currency: 'BGN', symbol: 'BGN', dateFormat: 'yyyy-M-d', numericCode: 975 },
			BH: { countryName: 'Bahrain', currency: 'BHD', symbol: 'BD', dateFormat: 'dd/MM/yyyy', numericCode: 48 },
			BI: { countryName: 'Burundi', currency: 'BIF', symbol: 'FBu', numericCode: 108 },
			BJ: { countryName: 'Benin', currency: 'XOF', symbol: 'CFA', numericCode: 952 },
			BL: { countryName: 'Saint Barthelemy', currency: 'EUR', symbol: '€', numericCode: 978 },
			BM: { countryName: 'Bermuda', currency: 'BMD', symbol: 'BMD', numericCode: 60 },
			BN: { countryName: 'Brunei', currency: 'BND', symbol: 'BN$', numericCode: 96 },
			BO: { countryName: 'Bolivia', currency: 'BOB', symbol: 'Bs', dateFormat: 'dd-MM-yyyy', numericCode: 68 },
			BQ: { countryName: 'Bonaire, Saint Eustatius and Saba ', currency: 'USD', symbol: '$', numericCode: 840 },
			BR: { countryName: 'Brazil', currency: 'BRL', symbol: 'R$', dateFormat: 'dd/MM/yyyy', numericCode: 986 },
			BS: { countryName: 'Bahamas', currency: 'BSD', symbol: 'BSD', numericCode: 44 },
			BT: { countryName: 'Bhutan', currency: 'BTN', symbol: 'BTN', numericCode: 64 },
			BV: { countryName: 'Bouvet Island', currency: 'NOK', symbol: 'Nkr', numericCode: 578 },
			BW: { countryName: 'Botswana', currency: 'BWP', symbol: 'BWP', numericCode: 72 },
			BY: { countryName: 'Belarus', currency: 'BYN', symbol: 'BYN', dateFormat: 'd.M.yyyy', numericCode: 933 },
			BZ: { countryName: 'Belize', currency: 'BZD', symbol: 'BZ$', numericCode: 84 },
			CA: { countryName: 'Canada', currency: 'CAD', symbol: 'CA$', dateFormat: 'dd/MM/yyyy', numericCode: 124 },
			CC: { countryName: 'Cocos Islands', currency: 'AUD', symbol: 'AU$', numericCode: 36 },
			CD: { countryName: 'Democratic Republic of the Congo', currency: 'CDF', symbol: 'CDF', numericCode: 976 },
			CF: { countryName: 'Central African Republic', currency: 'XAF', symbol: 'FCFA', numericCode: 950 },
			CG: { countryName: 'Republic of the Congo', currency: 'XAF', symbol: 'FCFA', numericCode: 950 },
			CH: { countryName: 'Switzerland', currency: 'CHF', symbol: 'CHF', dateFormat: 'dd.MM.yyyy', numericCode: 756 },
			CI: { countryName: 'Ivory Coast', currency: 'XOF', symbol: 'CFA', numericCode: 952 },
			CK: { countryName: 'Cook Islands', currency: 'NZD', symbol: 'NZ$', numericCode: 554 },
			CL: { countryName: 'Chile', currency: 'CLP', symbol: 'CL$', dateFormat: 'dd-MM-yyyy', numericCode: 152 },
			CM: { countryName: 'Cameroon', currency: 'XAF', symbol: 'FCFA', numericCode: 950 },
			CN: { countryName: 'China', currency: 'CNY', symbol: 'CN¥', dateFormat: 'yyyy-M-d', numericCode: 156 },
			CO: { countryName: 'Colombia', currency: 'COP', symbol: 'CO$', dateFormat: 'd/MM/yyyy', numericCode: 170 },
			CR: { countryName: 'Costa Rica', currency: 'CRC', symbol: '₡', dateFormat: 'dd/MM/yyyy', numericCode: 188 },
			CU: { countryName: 'Cuba', currency: 'CUP', symbol: 'CUP', numericCode: 192 },
			CV: { countryName: 'Cape Verde', currency: 'CVE', symbol: 'CV$', numericCode: 132 },
			CW: { countryName: 'Curacao', currency: 'ANG', symbol: 'ANG', numericCode: 532 },
			CX: { countryName: 'Christmas Island', currency: 'AUD', symbol: 'AU$', numericCode: 36 },
			CY: { countryName: 'Cyprus', currency: 'EUR', symbol: '€', dateFormat: 'dd/MM/yyyy', numericCode: 978 },
			CZ: { countryName: 'Czech Republic', currency: 'CZK', symbol: 'Kč', dateFormat: 'd.M.yyyy', numericCode: 203 },
			DE: { countryName: 'Germany', currency: 'EUR', symbol: '€', dateFormat: 'dd.MM.yyyy', numericCode: 978 },
			DJ: { countryName: 'Djibouti', currency: 'DJF', symbol: 'Fdj', numericCode: 262 },
			DK: { countryName: 'Denmark', currency: 'DKK', symbol: 'Dkr', dateFormat: 'dd-MM-yyyy', numericCode: 208 },
			DM: { countryName: 'Dominica', currency: 'XCD', symbol: 'XCD', numericCode: 951 },
			DO: { countryName: 'Dominican Republic', currency: 'DOP', symbol: 'RD$', dateFormat: 'MM/dd/yyyy', numericCode: 214 },
			DZ: { countryName: 'Algeria', currency: 'DZD', symbol: 'DA', dateFormat: 'dd/MM/yyyy', numericCode: 12 },
			EC: { countryName: 'Ecuador', currency: 'USD', symbol: '$', dateFormat: 'dd/MM/yyyy', numericCode: 840 },
			EE: { countryName: 'Estonia', currency: 'EUR', symbol: '€', dateFormat: 'd.MM.yyyy', numericCode: 978 },
			EG: { countryName: 'Egypt', currency: 'EGP', symbol: 'EGP', dateFormat: 'dd/MM/yyyy', numericCode: 818 },
			EH: { countryName: 'Western Sahara', currency: 'MAD', symbol: 'MAD', numericCode: 504 },
			ER: { countryName: 'Eritrea', currency: 'ERN', symbol: 'Nfk', numericCode: 232 },
			ES: { countryName: 'Spain', currency: 'EUR', symbol: '€', dateFormat: 'dd/MM/yyyy', numericCode: 978 },
			ET: { countryName: 'Ethiopia', currency: 'ETB', symbol: 'Br', numericCode: 230 },
			FI: { countryName: 'Finland', currency: 'EUR', symbol: '€', dateFormat: 'd.M.yyyy', numericCode: 978 },
			FJ: { countryName: 'Fiji', currency: 'FJD', symbol: 'FJD', numericCode: 242 },
			FK: { countryName: 'Falkland Islands', currency: 'FKP', symbol: 'FKP', numericCode: 238 },
			FM: { countryName: 'Micronesia', currency: 'USD', symbol: '$', numericCode: 840 },
			FO: { countryName: 'Faroe Islands', currency: 'DKK', symbol: 'Dkr', numericCode: 208 },
			FR: { countryName: 'France', currency: 'EUR', symbol: '€', dateFormat: 'dd/MM/yyyy', numericCode: 978 },
			GA: { countryName: 'Gabon', currency: 'XAF', symbol: 'FCFA', numericCode: 950 },
			GB: { countryName: 'United Kingdom', currency: 'GBP', symbol: '£', dateFormat: 'dd/MM/yyyy', numericCode: 826 },
			GD: { countryName: 'Grenada', currency: 'XCD', symbol: 'XCD', numericCode: 951 },
			GE: { countryName: 'Georgia', currency: 'GEL', symbol: 'GEL', numericCode: 981 },
			GF: { countryName: 'French Guiana', currency: 'EUR', symbol: '€', numericCode: 978 },
			GG: { countryName: 'Guernsey', currency: 'GBP', symbol: '£', numericCode: 826 },
			GH: { countryName: 'Ghana', currency: 'GHS', symbol: 'GH₵', numericCode: 936 },
			GI: { countryName: 'Gibraltar', currency: 'GIP', symbol: 'GIP', numericCode: 292 },
			GL: { countryName: 'Greenland', currency: 'DKK', symbol: 'Dkr', numericCode: 208 },
			GM: { countryName: 'Gambia', currency: 'GMD', symbol: 'GMD', numericCode: 270 },
			GN: { countryName: 'Guinea', currency: 'GNF', symbol: 'FG', numericCode: 324 },
			GP: { countryName: 'Guadeloupe', currency: 'EUR', symbol: '€', numericCode: 978 },
			GQ: { countryName: 'Equatorial Guinea', currency: 'XAF', symbol: 'FCFA', numericCode: 950 },
			GR: { countryName: 'Greece', currency: 'EUR', symbol: '€', dateFormat: 'd/M/yyyy', numericCode: 978 },
			GS: { countryName: 'South Georgia and the South Sandwich Islands', currency: 'GBP', symbol: '£', numericCode: 826 },
			GT: { countryName: 'Guatemala', currency: 'GTQ', symbol: 'GTQ', dateFormat: 'd/MM/yyyy', numericCode: 320 },
			GU: { countryName: 'Guam', currency: 'USD', symbol: '$', numericCode: 840 },
			GW: { countryName: 'Guinea-Bissau', currency: 'XOF', symbol: 'CFA', numericCode: 952 },
			GY: { countryName: 'Guyana', currency: 'GYD', symbol: 'GYD', numericCode: 328 },
			HK: { countryName: 'Hong Kong', currency: 'HKD', symbol: 'HK$', dateFormat: 'yyyy年M月d日', numericCode: 344 },
			HM: { countryName: 'Heard Island and McDonald Islands', currency: 'AUD', symbol: 'AU$', numericCode: 36 },
			HN: { countryName: 'Honduras', currency: 'HNL', symbol: 'HNL', dateFormat: 'MM-dd-yyyy', numericCode: 340 },
			HR: { countryName: 'Croatia', currency: 'EUR', symbol: '€', dateFormat: 'dd.MM.yyyy.', numericCode: 978 },
			HT: { countryName: 'Haiti', currency: 'HTG', symbol: 'HTG', numericCode: 332 },
			HU: { countryName: 'Hungary', currency: 'HUF', symbol: 'Ft', dateFormat: 'yyyy.MM.dd.', numericCode: 348 },
			ID: { countryName: 'Indonesia', currency: 'IDR', symbol: 'Rp', dateFormat: 'dd/MM/yyyy', numericCode: 360 },
			IE: { countryName: 'Ireland', currency: 'EUR', symbol: '€', dateFormat: 'dd/MM/yyyy', numericCode: 978 },
			IL: { countryName: 'Israel', currency: 'ILS', symbol: '₪', dateFormat: 'dd/MM/yyyy', numericCode: 376 },
			IM: { countryName: 'Isle of Man', currency: 'GBP', symbol: '£', numericCode: 826 },
			IN: { countryName: 'India', currency: 'INR', symbol: '₹', dateFormat: 'd/M/yyyy', numericCode: 356 },
			IO: { countryName: 'British Indian Ocean Territory', currency: 'USD', symbol: '$', numericCode: 840 },
			IQ: { countryName: 'Iraq', currency: 'IQD', symbol: 'IQD', dateFormat: 'dd/MM/yyyy', numericCode: 368 },
			IR: { countryName: 'Iran', currency: 'IRR', symbol: 'IRR', numericCode: 364 },
			IS: { countryName: 'Iceland', currency: 'ISK', symbol: 'Ikr', dateFormat: 'd.M.yyyy', numericCode: 352 },
			IT: { countryName: 'Italy', currency: 'EUR', symbol: '€', dateFormat: 'dd/MM/yyyy', numericCode: 978 },
			JE: { countryName: 'Jersey', currency: 'GBP', symbol: '£', numericCode: 826 },
			JM: { countryName: 'Jamaica', currency: 'JMD', symbol: 'J$', numericCode: 388 },
			JO: { countryName: 'Jordan', currency: 'JOD', symbol: 'JD', dateFormat: 'dd/MM/yyyy', numericCode: 400 },
			JP: { countryName: 'Japan', currency: 'JPY', symbol: '¥', dateFormat: 'H24.MM.dd', numericCode: 392 },
			KE: { countryName: 'Kenya', currency: 'KES', symbol: 'Ksh', numericCode: 404 },
			KG: { countryName: 'Kyrgyzstan', currency: 'KGS', symbol: 'KGS', numericCode: 417 },
			KH: { countryName: 'Cambodia', currency: 'KHR', symbol: 'KHR', numericCode: 116 },
			KI: { countryName: 'Kiribati', currency: 'AUD', symbol: 'AU$', numericCode: 36 },
			KM: { countryName: 'Comoros', currency: 'KMF', symbol: 'CF', numericCode: 174 },
			KN: { countryName: 'Saint Kitts and Nevis', currency: 'XCD', symbol: 'XCD', numericCode: 951 },
			KP: { countryName: 'North Korea', currency: 'KPW', symbol: 'KPW', numericCode: 408 },
			KR: { countryName: 'South Korea', currency: 'KRW', symbol: '₩', dateFormat: 'yyyy. M. d', numericCode: 410 },
			KW: { countryName: 'Kuwait', currency: 'KWD', symbol: 'KD', dateFormat: 'dd/MM/yyyy', numericCode: 414 },
			KY: { countryName: 'Cayman Islands', currency: 'KYD', symbol: 'KYD', numericCode: 136 },
			KZ: { countryName: 'Kazakhstan', currency: 'KZT', symbol: 'KZT', numericCode: 398 },
			LA: { countryName: 'Laos', currency: 'LAK', symbol: 'LAK', numericCode: 418 },
			LB: { countryName: 'Lebanon', currency: 'LBP', symbol: 'LB£', dateFormat: 'dd/MM/yyyy', numericCode: 422 },
			LC: { countryName: 'Saint Lucia', currency: 'XCD', symbol: 'XCD', numericCode: 951 },
			LI: { countryName: 'Liechtenstein', currency: 'CHF', symbol: 'CHF', numericCode: 756 },
			LK: { countryName: 'Sri Lanka', currency: 'LKR', symbol: 'SLRs', numericCode: 144 },
			LR: { countryName: 'Liberia', currency: 'LRD', symbol: 'LRD', numericCode: 430 },
			LS: { countryName: 'Lesotho', currency: 'LSL', symbol: 'LSL', numericCode: 426 },
			LT: { countryName: 'Lithuania', currency: 'EUR', symbol: '€', dateFormat: 'yyyy.M.d', numericCode: 978 },
			LU: { countryName: 'Luxembourg', currency: 'EUR', symbol: '€', dateFormat: 'dd.MM.yyyy', numericCode: 978 },
			LV: { countryName: 'Latvia', currency: 'EUR', symbol: '€', dateFormat: 'yyyy.d.M', numericCode: 978 },
			LY: { countryName: 'Libya', currency: 'LYD', symbol: 'LD', dateFormat: 'dd/MM/yyyy', numericCode: 434 },
			MA: { countryName: 'Morocco', currency: 'MAD', symbol: 'MAD', dateFormat: 'dd/MM/yyyy', numericCode: 504 },
			MC: { countryName: 'Monaco', currency: 'EUR', symbol: '€', numericCode: 978 },
			MD: { countryName: 'Moldova', currency: 'MDL', symbol: 'MDL', numericCode: 498 },
			ME: { countryName: 'Montenegro', currency: 'EUR', symbol: '€', dateFormat: 'd.M.yyyy.', numericCode: 978 },
			MF: { countryName: 'Saint Martin', currency: 'EUR', symbol: '€', numericCode: 978 },
			MG: { countryName: 'Madagascar', currency: 'MGA', symbol: 'MGA', numericCode: 969 },
			MH: { countryName: 'Marshall Islands', currency: 'USD', symbol: '$', numericCode: 840 },
			MK: { countryName: 'Macedonia', currency: 'MKD', symbol: 'MKD', dateFormat: 'd.M.yyyy', numericCode: 807 },
			ML: { countryName: 'Mali', currency: 'XOF', symbol: 'CFA', numericCode: 952 },
			MM: { countryName: 'Myanmar', currency: 'MMK', symbol: 'MMK', numericCode: 104 },
			MN: { countryName: 'Mongolia', currency: 'MNT', symbol: 'MNT', numericCode: 496 },
			MO: { countryName: 'Macao', currency: 'MOP', symbol: 'MOP$', numericCode: 446 },
			MP: { countryName: 'Northern Mariana Islands', currency: 'USD', symbol: '$', numericCode: 840 },
			MQ: { countryName: 'Martinique', currency: 'EUR', symbol: '€', numericCode: 978 },
			MR: { countryName: 'Mauritania', currency: 'MRU', symbol: 'MRU', numericCode: 929 },
			MS: { countryName: 'Montserrat', currency: 'XCD', symbol: 'XCD', numericCode: 951 },
			MT: { countryName: 'Malta', currency: 'EUR', symbol: '€', dateFormat: 'dd/MM/yyyy', numericCode: 978 },
			MU: { countryName: 'Mauritius', currency: 'MUR', symbol: 'MURs', numericCode: 480 },
			MV: { countryName: 'Maldives', currency: 'MVR', symbol: 'MVR', numericCode: 462 },
			MW: { countryName: 'Malawi', currency: 'MWK', symbol: 'MWK', numericCode: 454 },
			MX: { countryName: 'Mexico', currency: 'MXN', symbol: 'MX$', dateFormat: 'd/MM/yyyy', numericCode: 484 },
			MY: { countryName: 'Malaysia', currency: 'MYR', symbol: 'RM', dateFormat: 'dd/MM/yyyy', numericCode: 458 },
			MZ: { countryName: 'Mozambique', currency: 'MZN', symbol: 'MTn', numericCode: 943 },
			NA: { countryName: 'Namibia', currency: 'NAD', symbol: 'N$', numericCode: 516 },
			NC: { countryName: 'New Caledonia', currency: 'XPF', symbol: 'XPF', numericCode: 953 },
			NE: { countryName: 'Niger', currency: 'XOF', symbol: 'CFA', numericCode: 952 },
			NF: { countryName: 'Norfolk Island', currency: 'AUD', symbol: 'AU$', numericCode: 36 },
			NG: { countryName: 'Nigeria', currency: 'NGN', symbol: '₦', numericCode: 566 },
			NI: { countryName: 'Nicaragua', currency: 'NIO', symbol: 'C$', dateFormat: 'MM-dd-yyyy', numericCode: 558 },
			NL: { countryName: 'Netherlands', currency: 'EUR', symbol: '€', dateFormat: 'd-M-yyyy', numericCode: 978 },
			NO: { countryName: 'Norway', currency: 'NOK', symbol: 'Nkr', dateFormat: 'dd.MM.yyyy', numericCode: 578 },
			NP: { countryName: 'Nepal', currency: 'NPR', symbol: 'NPRs', numericCode: 524 },
			NR: { countryName: 'Nauru', currency: 'AUD', symbol: 'AU$', numericCode: 36 },
			NU: { countryName: 'Niue', currency: 'NZD', symbol: 'NZ$', numericCode: 554 },
			NZ: { countryName: 'New Zealand', currency: 'NZD', symbol: 'NZ$', dateFormat: 'd/MM/yyyy', numericCode: 554 },
			OM: { countryName: 'Oman', currency: 'OMR', symbol: 'OMR', dateFormat: 'dd/MM/yyyy', numericCode: 512 },
			PA: { countryName: 'Panama', currency: 'PAB', symbol: 'B/.', dateFormat: 'MM/dd/yyyy', numericCode: 590 },
			PE: { countryName: 'Peru', currency: 'PEN', symbol: 'S/.', dateFormat: 'dd/MM/yyyy', numericCode: 604 },
			PF: { countryName: 'French Polynesia', currency: 'XPF', symbol: 'XPF', numericCode: 953 },
			PG: { countryName: 'Papua New Guinea', currency: 'PGK', symbol: 'PGK', numericCode: 598 },
			PH: { countryName: 'Philippines', currency: 'PHP', symbol: '₱', dateFormat: 'M/d/yyyy', numericCode: 608 },
			PK: { countryName: 'Pakistan', currency: 'PKR', symbol: 'PKRs', numericCode: 586 },
			PL: { countryName: 'Poland', currency: 'PLN', symbol: 'zł', dateFormat: 'dd.MM.yyyy', numericCode: 985 },
			PM: { countryName: 'Saint Pierre and Miquelon', currency: 'EUR', symbol: '€', numericCode: 978 },
			PN: { countryName: 'Pitcairn', currency: 'NZD', symbol: 'NZ$', numericCode: 554 },
			PR: { countryName: 'Puerto Rico', currency: 'USD', symbol: '$', dateFormat: 'MM-dd-yyyy', numericCode: 840 },
			PS: { countryName: 'Palestinian Territory', currency: 'ILS', symbol: '₪', numericCode: 376 },
			PT: { countryName: 'Portugal', currency: 'EUR', symbol: '€', dateFormat: 'dd-MM-yyyy', numericCode: 978 },
			PW: { countryName: 'Palau', currency: 'USD', symbol: '$', numericCode: 840 },
			PY: { countryName: 'Paraguay', currency: 'PYG', symbol: '₲', dateFormat: 'dd/MM/yyyy', numericCode: 600 },
			QA: { countryName: 'Qatar', currency: 'QAR', symbol: 'QR', dateFormat: 'dd/MM/yyyy', numericCode: 634 },
			RE: { countryName: 'Reunion', currency: 'EUR', symbol: '€', numericCode: 978 },
			RO: { countryName: 'Romania', currency: 'RON', symbol: 'RON', dateFormat: 'dd.MM.yyyy', numericCode: 946 },
			RS: { countryName: 'Serbia', currency: 'RSD', symbol: 'din.', dateFormat: 'd.M.yyyy.', numericCode: 941 },
			RU: { countryName: 'Russia', currency: 'RUB', symbol: 'RUB', dateFormat: 'dd.MM.yyyy', numericCode: 643 },
			RW: { countryName: 'Rwanda', currency: 'RWF', symbol: 'RWF', numericCode: 646 },
			SA: { countryName: 'Saudi Arabia', currency: 'SAR', symbol: 'SR', dateFormat: 'dd/MM/yyyy', numericCode: 682 },
			SB: { countryName: 'Solomon Islands', currency: 'SBD', symbol: 'SBD', numericCode: 90 },
			SC: { countryName: 'Seychelles', currency: 'SCR', symbol: 'SCR', numericCode: 690 },
			SD: { countryName: 'Sudan', currency: 'SDG', symbol: 'SDG', dateFormat: 'dd/MM/yyyy', numericCode: 938 },
			SE: { countryName: 'Sweden', currency: 'SEK', symbol: 'Skr', dateFormat: 'yyyy-MM-dd', numericCode: 752 },
			SG: { countryName: 'Singapore', currency: 'SGD', symbol: 'S$', dateFormat: 'M/d/yyyy', numericCode: 702 },
			SH: { countryName: 'Saint Helena', currency: 'SHP', symbol: 'SHP', numericCode: 654 },
			SI: { countryName: 'Slovenia', currency: 'EUR', symbol: '€', dateFormat: 'd.M.yyyy', numericCode: 978 },
			SJ: { countryName: 'Svalbard and Jan Mayen', currency: 'NOK', symbol: 'Nkr', numericCode: 578 },
			SK: { countryName: 'Slovakia', currency: 'EUR', symbol: '€', dateFormat: 'd.M.yyyy', numericCode: 978 },
			SL: { countryName: 'Sierra Leone', currency: 'SLL', symbol: 'SLL', numericCode: 694 },
			SM: { countryName: 'San Marino', currency: 'EUR', symbol: '€', numericCode: 978 },
			SN: { countryName: 'Senegal', currency: 'XOF', symbol: 'CFA', numericCode: 952 },
			SO: { countryName: 'Somalia', currency: 'SOS', symbol: 'Ssh', numericCode: 706 },
			SR: { countryName: 'Suriname', currency: 'SRD', symbol: 'SRD', numericCode: 968 },
			SS: { countryName: 'South Sudan', currency: 'SSP', symbol: 'SSP', numericCode: 728 },
			ST: { countryName: 'Sao Tome and Principe', currency: 'STD', symbol: 'STD', numericCode: 678 },
			SV: { countryName: 'El Salvador', currency: 'USD', symbol: '$', dateFormat: 'MM-dd-yyyy', numericCode: 840 },
			SX: { countryName: 'Sint Maarten', currency: 'ANG', symbol: 'ANG', numericCode: 532 },
			SY: { countryName: 'Syria', currency: 'SYP', symbol: 'SY£', dateFormat: 'dd/MM/yyyy', numericCode: 760 },
			SZ: { countryName: 'Swaziland', currency: 'SZL', symbol: 'SZL', numericCode: 748 },
			TC: { countryName: 'Turks and Caicos Islands', currency: 'USD', symbol: '$', numericCode: 840 },
			TD: { countryName: 'Chad', currency: 'XAF', symbol: 'FCFA', numericCode: 950 },
			TF: { countryName: 'French Southern Territories', currency: 'EUR', symbol: '€', numericCode: 978 },
			TG: { countryName: 'Togo', currency: 'XOF', symbol: 'CFA', numericCode: 952 },
			TH: { countryName: 'Thailand', currency: 'THB', symbol: '฿', dateFormat: '๓/๖/๒๕๕๕', numericCode: 764 },
			TJ: { countryName: 'Tajikistan', currency: 'TJS', symbol: 'TJS', numericCode: 972 },
			TK: { countryName: 'Tokelau', currency: 'NZD', symbol: 'NZ$', numericCode: 554 },
			TL: { countryName: 'East Timor', currency: 'USD', symbol: '$', numericCode: 840 },
			TM: { countryName: 'Turkmenistan', currency: 'TMT', symbol: 'TMT', numericCode: 934 },
			TN: { countryName: 'Tunisia', currency: 'TND', symbol: 'DT', dateFormat: 'dd/MM/yyyy', numericCode: 788 },
			TO: { countryName: 'Tonga', currency: 'TOP', symbol: 'T$', numericCode: 776 },
			TR: { countryName: 'Turkey', currency: 'TRY', symbol: '₺', dateFormat: 'dd.MM.yyyy', numericCode: 949 },
			TT: { countryName: 'Trinidad and Tobago', currency: 'TTD', symbol: 'TT$', numericCode: 780 },
			TV: { countryName: 'Tuvalu', currency: 'AUD', symbol: 'AU$', numericCode: 36 },
			TW: { countryName: 'Taiwan', currency: 'TWD', symbol: 'NT$', dateFormat: 'yyyy/M/d', numericCode: 901 },
			TZ: { countryName: 'Tanzania', currency: 'TZS', symbol: 'TSh', numericCode: 834 },
			UA: { countryName: 'Ukraine', currency: 'UAH', symbol: '₴', dateFormat: 'dd.MM.yyyy', numericCode: 980 },
			UG: { countryName: 'Uganda', currency: 'UGX', symbol: 'USh', numericCode: 800 },
			UM: { countryName: 'United States Minor Outlying Islands', currency: 'USD', symbol: '$', numericCode: 840 },
			US: { countryName: 'United States', currency: 'USD', symbol: '$', dateFormat: 'M/d/yyyy', numericCode: 840 },
			UY: { countryName: 'Uruguay', currency: 'UYU', symbol: '$U', dateFormat: 'dd/MM/yyyy', numericCode: 858 },
			UZ: { countryName: 'Uzbekistan', currency: 'UZS', symbol: 'UZS', numericCode: 860 },
			VA: { countryName: 'Vatican', currency: 'EUR', symbol: '€', numericCode: 978 },
			VC: { countryName: 'Saint Vincent and the Grenadines', currency: 'XCD', symbol: 'XCD', numericCode: 951 },
			VE: { countryName: 'Venezuela', currency: 'VEF', symbol: 'Bs.F.', dateFormat: 'dd/MM/yyyy', numericCode: 937 },
			VG: { countryName: 'British Virgin Islands', currency: 'USD', symbol: '$', numericCode: 840 },
			VI: { countryName: 'U.S. Virgin Islands', currency: 'USD', symbol: '$', numericCode: 840 },
			VN: { countryName: 'Vietnam', currency: 'VND', symbol: '₫', dateFormat: 'dd/MM/yyyy', numericCode: 704 },
			VU: { countryName: 'Vanuatu', currency: 'VUV', symbol: 'VUV', numericCode: 548 },
			WF: { countryName: 'Wallis and Futuna', currency: 'XPF', symbol: 'XPF', numericCode: 953 },
			WS: { countryName: 'Samoa', currency: 'WST', symbol: 'WST', numericCode: 882 },
			XK: { countryName: 'Kosovo', currency: 'EUR', symbol: '€', numericCode: 978 },
			YE: { countryName: 'Yemen', currency: 'YER', symbol: 'YR', dateFormat: 'dd/MM/yyyy', numericCode: 886 },
			YT: { countryName: 'Mayotte', currency: 'EUR', symbol: '€', numericCode: 978 },
			ZA: { countryName: 'South Africa', currency: 'ZAR', symbol: 'R', dateFormat: 'yyyy/MM/dd', numericCode: 710 },
			ZM: { countryName: 'Zambia', currency: 'ZMW', symbol: 'ZK', numericCode: 967 },
			ZW: { countryName: 'Zimbabwe', currency: 'ZWL', symbol: 'ZWL', numericCode: 932 },
		},
		r = ['currency', 'symbol'],
		a = r.concat(['countryName', 'dateFormat']);
	((b.getAllISOCodes = function () {
		return Object.keys(e).map(function (n) {
			const o = e[n];
			return { iso: n, currency: o.currency, symbol: o.symbol, countryName: o.countryName, dateFormat: o.dateFormat };
		});
	}),
		(b.getAllInfoByISO = function (c) {
			const n = c.toUpperCase();
			if (e.hasOwnProperty(n)) {
				const o = e[n];
				return { iso: n, currency: o.currency, symbol: o.symbol, countryName: o.countryName, dateFormat: o.dateFormat };
			}
			throw new Error("ISO2 code wasn't found");
		}),
		(b.getParamByISO = function (c, n) {
			if ((t(n, a), e.hasOwnProperty(c.toUpperCase()))) return e[c.toUpperCase()][n];
			throw new Error("ISO2 code wasn't found");
		}),
		(b.getISOByParam = function (c, n) {
			t(c, a);
			for (let o in e) if (e.hasOwnProperty(o) && e[o][c] === n) return o;
			throw new Error(n + " wasn't found in " + c);
		}),
		(b.getParamByParam = function (c, n, o) {
			(t(c, a), t(o, a));
			for (let y in e) if (e.hasOwnProperty(y) && e[y][c] === n) return e[y][o];
			throw new Error(c + " wasn't found in " + n);
		}),
		(b.getAllCountriesByCurrencyOrSymbol = function (c, n) {
			const o = [];
			t(c, r);
			for (let y in e) e.hasOwnProperty(y) && e[y][c] === n && o.push(e[y].countryName);
			if (o.length === 0) throw new Error(n + " wasn't found in" + c);
			return o;
		}),
		(b.getAllISOByCurrencyOrSymbol = function (c, n) {
			const o = [];
			t(c, r);
			for (let y in e) e.hasOwnProperty(y) && e[y][c] === n && o.push(y);
			if (o.length === 0) throw new Error(n + " wasn't found in" + c);
			return o;
		}));
	function t(c, n) {
		if (n.indexOf(c) === -1) throw new Error('Invalid search param');
	}
	return b;
}
var J = te(),
	ye = ((e) => ((e.PLAN = 'PLAN'), (e.SUBSCRIPTION = 'SUBSCRIPTION'), e))(ye || {}),
	ue = ((e) => ((e.ONETIME = 'ONETIME'), (e.RECURRING = 'RECURRING'), e))(ue || {}),
	me = ((e) => ((e.NEVER = 'NEVER'), (e.DURATION = 'DURATION'), (e.BILLING_CYCLE = 'BILLING_CYCLE'), e))(me || {}),
	ie = ((e) => ((e.DAYS = 'DAY'), (e.WEEKS = 'WEEK'), (e.MONTHS = 'MONTH'), (e.YEARS = 'YEAR'), e))(ie || {}),
	F = ((e) => (
		(e.DAILY = 'DAILY'),
		(e.WEEKLY = 'WEEKLY'),
		(e.MONTHLY = 'MONTHLY'),
		(e.ANNUAL = 'ANNUAL'),
		(e.QUARTERLY = 'QUARTERLY'),
		(e.HALF_YEARLY = 'HALF_YEARLY'),
		e
	))(F || {}),
	U = ((e) => ((e.FLAT_FEE = 'FLAT_FEE'), (e.PACKAGE = 'PACKAGE'), (e.TIERED = 'TIERED'), e))(U || {}),
	O = ((e) => ((e.USAGE = 'USAGE'), (e.FIXED = 'FIXED'), e))(O || {}),
	se = ((e) => ((e.FIAT = 'FIAT'), (e.CUSTOM = 'CUSTOM'), e))(se || {}),
	L = ((e) => (
		(e.PLAN = 'PLAN'),
		(e.ADDON = 'ADDON'),
		(e.FEATURE = 'FEATURE'),
		(e.METER = 'METER'),
		(e.COST_SHEET = 'COSTSHEET'),
		(e.SUBSCRIPTION = 'SUBSCRIPTION'),
		e
	))(L || {}),
	de = ((e) => ((e.VOLUME = 'VOLUME'), (e.SLAB = 'SLAB'), e))(de || {}),
	le = ((e) => (
		(e.MONTHLY = 'MONTHLY'),
		(e.ANNUAL = 'ANNUAL'),
		(e.WEEKLY = 'WEEKLY'),
		(e.DAILY = 'DAILY'),
		(e.QUARTERLY = 'QUARTERLY'),
		(e.HALF_YEARLY = 'HALF_YEARLY'),
		(e.ONETIME = 'ONETIME'),
		e
	))(le || {}),
	be = ((e) => ((e.UPCOMING = 'upcoming'), (e.INACTIVE = 'inactive'), (e.ACTIVE = 'active'), e))(be || {}),
	Ne = ((e) => (
		(e.MONTHLY = 'MONTHLY'),
		(e.ANNUAL = 'ANNUAL'),
		(e.WEEKLY = 'WEEKLY'),
		(e.DAILY = 'DAILY'),
		(e.QUARTERLY = 'QUARTERLY'),
		(e.HALF_YEARLY = 'HALF_YEARLY'),
		(e.NEVER = 'NEVER'),
		e
	))(Ne || {}),
	x = ((e) => ((e.PLAN = 'PLAN'), (e.SUBSCRIPTION = 'SUBSCRIPTION'), (e.ADDON = 'ADDON'), e))(x || {}),
	Ce = ((e) => ((e.SUBSCRIPTION = 'SUBSCRIPTION'), (e.ONE_OFF = 'ONE_OFF'), (e.CREDIT = 'CREDIT'), e))(Ce || {}),
	B = ((e) => ((e.ARREAR = 'ARREAR'), (e.ADVANCE = 'ADVANCE'), e))(B || {}),
	G = ((e) => ((e.RECURRING = 'RECURRING'), (e.ONETIME = 'ONETIME'), e))(G || {}),
	Me = ((e) => ((e.DRAFT = 'DRAFT'), (e.FINALIZED = 'FINALIZED'), (e.VOIDED = 'VOIDED'), (e.SKIPPED = 'SKIPPED'), e))(Me || {}),
	$ = ((e) => ((e.ANNIVERSARY = 'anniversary'), (e.CALENDAR = 'calendar'), e))($ || {}),
	h = ((e) => (
		(e.ACTIVE = 'active'),
		(e.CANCELLED = 'cancelled'),
		(e.INCOMPLETE = 'incomplete'),
		(e.TRIALING = 'trialing'),
		(e.DRAFT = 'draft'),
		e
	))(h || {}),
	Ae = ((e) => ((e.STANDALONE = 'standalone'), (e.PARENT = 'parent'), (e.INHERITED = 'inherited'), e))(Ae || {}),
	pe = ((e) => ((e.INHERITANCE = 'inheritance'), (e.QUANTITY_CHANGE = 'quantity_change'), e))(pe || {}),
	Fe = ((e) => ((e.CREATED = 'created'), (e.UPDATED = 'updated'), (e.ENDED = 'ended'), e))(Fe || {}),
	fe = ((e) => ((e.CREATED = 'created'), (e.WALLET_CREDIT = 'wallet_credit'), e))(fe || {}),
	De = ((e) => ((e.USAGE_OVERRIDE = 'usage_override'), (e.FIXED_QUANTITY = 'fixed_quantity'), e))(De || {}),
	v = ((e) => (
		(e.ALLOW_INCOMPLETE = 'allow_incomplete'),
		(e.DEFAULT_INCOMPLETE = 'default_incomplete'),
		(e.ERROR_IF_INCOMPLETE = 'error_if_incomplete'),
		(e.DEFAULT_ACTIVE = 'default_active'),
		e
	))(v || {}),
	H = ((e) => ((e.CHARGE_AUTOMATICALLY = 'charge_automatically'), (e.SEND_INVOICE = 'send_invoice'), e))(H || {}),
	f = ((e) => (
		(e.NET_15 = '15 NET'),
		(e.NET_30 = '30 NET'),
		(e.NET_45 = '45 NET'),
		(e.NET_60 = '60 NET'),
		(e.NET_75 = '75 NET'),
		(e.NET_90 = '90 NET'),
		e
	))(f || {}),
	Y = ((e) => ((e.PLAN = 'plan'), (e.ADDON = 'addon'), (e.SUBSCRIPTION = 'subscription'), e))(Y || {}),
	P = ((e) => ((e.CREATE_PRORATIONS = 'create_prorations'), (e.NONE = 'none'), e))(P || {}),
	R = ((e) => ((e.IMMEDIATE = 'immediate'), (e.END_OF_PERIOD = 'end_of_period'), (e.SCHEDULED_DATE = 'scheduled_date'), e))(R || {}),
	Ee = ((e) => ((e.GENERATE_INVOICE = 'generate_invoice'), (e.SKIP = 'skip'), e))(Ee || {}),
	s = ((e) => (
		(e.DAILY = 'DAILY'),
		(e.WEEKLY = 'WEEKLY'),
		(e.MONTHLY = 'MONTHLY'),
		(e.QUARTERLY = 'QUARTERLY'),
		(e.HALF_YEARLY = 'HALF_YEARLY'),
		(e.ANNUAL = 'ANNUAL'),
		(e.ONETIME = 'ONETIME'),
		e
	))(s || {}),
	he = ((e) => ((e.LAST_HOUR = 'last-hour'), (e.LAST_DAY = 'last-day'), (e.LAST_WEEK = 'last-week'), (e.LAST_30_DAYS = 'last-30-days'), e))(
		he || {},
	);
const ge = () => {
		const e = J.getAllISOCodes(),
			r = new Map(),
			a = ['USD', 'INR', 'EUR'];
		return (
			a.forEach((t) => {
				const c = e.find((n) => n.currency === t);
				c && r.set(t, { currency: c.currency, symbol: c.symbol });
			}),
			e.forEach((t) => {
				a.includes(t.currency) || r.set(t.currency, { currency: t.currency, symbol: t.symbol });
			}),
			Array.from(r.values())
		);
	},
	Ar = Array.from(new Map(ge().map((e) => [e.currency, { label: e.currency, value: e.currency, symbol: e.symbol }])).values()),
	pr = [
		{ label: 'Daily', value: 'DAILY' },
		{ label: 'Weekly', value: 'WEEKLY' },
		{ label: 'Monthly', value: 'MONTHLY' },
		{ label: 'Yearly', value: 'ANNUAL' },
		{ label: 'Quarterly', value: 'QUARTERLY' },
		{ label: 'Half-Yearly', value: 'HALF_YEARLY' },
		{ label: 'One-time', value: 'ONETIME' },
	],
	Fr = [
		{ label: 'Daily', value: F.DAILY },
		{ label: 'Weekly', value: F.WEEKLY },
		{ label: 'Monthly', value: F.MONTHLY },
		{ label: 'Yearly', value: F.ANNUAL },
		{ label: 'Quarterly', value: F.QUARTERLY },
		{ label: 'Half-Yearly', value: F.HALF_YEARLY },
	];
(U.FLAT_FEE, U.PACKAGE, U.TIERED);
(G.RECURRING, G.ONETIME);
(L.PLAN, L.ADDON, L.FEATURE, L.METER);
(x.PLAN, x.ADDON);
(B.ARREAR, B.ADVANCE);
(h.ACTIVE, h.CANCELLED, h.INCOMPLETE, h.TRIALING, h.DRAFT);
($.ANNIVERSARY, $.CALENDAR);
(v.ALLOW_INCOMPLETE, v.DEFAULT_INCOMPLETE, v.ERROR_IF_INCOMPLETE, v.DEFAULT_ACTIVE);
(H.CHARGE_AUTOMATICALLY, H.SEND_INVOICE);
const Le = '__none__',
	fr = [
		{ label: 'None', value: Le },
		{ label: 'NET 15', value: f.NET_15 },
		{ label: 'NET 30', value: f.NET_30 },
		{ label: 'NET 45', value: f.NET_45 },
		{ label: 'NET 60', value: f.NET_60 },
		{ label: 'NET 75', value: f.NET_75 },
		{ label: 'NET 90', value: f.NET_90 },
	];
(P.CREATE_PRORATIONS, P.NONE);
(R.IMMEDIATE, R.END_OF_PERIOD, R.SCHEDULED_DATE);
(Y.PLAN, Y.ADDON);
const Dr = 45;
let ve = { data: '' },
	Se = (e) => {
		if (typeof window == 'object') {
			let r =
				(e ? e.querySelector('#_goober') : window._goober) ||
				Object.assign(document.createElement('style'), { innerHTML: ' ', id: '_goober' });
			return ((r.nonce = window.__nonce__), r.parentNode || (e || document.head).appendChild(r), r.firstChild);
		}
		return e || ve;
	},
	Ue = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
	Re = /\/\*[^]*?\*\/|  +/g,
	j = /\n+/g,
	M = (e, r) => {
		let a = '',
			t = '',
			c = '';
		for (let n in e) {
			let o = e[n];
			n[0] == '@'
				? n[1] == 'i'
					? (a = n + ' ' + o + ';')
					: (t += n[1] == 'f' ? M(o, n) : n + '{' + M(o, n[1] == 'k' ? '' : r) + '}')
				: typeof o == 'object'
					? (t += M(
							o,
							r
								? r.replace(/([^,])+/g, (y) =>
										n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (u) => (/&/.test(u) ? u.replace(/&/g, y) : y ? y + ' ' + u : u)),
									)
								: n,
						))
					: o != null && ((n = /^--/.test(n) ? n : n.replace(/[A-Z]/g, '-$&').toLowerCase()), (c += M.p ? M.p(n, o) : n + ':' + o + ';'));
		}
		return a + (r && c ? r + '{' + c + '}' : c) + t;
	},
	N = {},
	q = (e) => {
		if (typeof e == 'object') {
			let r = '';
			for (let a in e) r += a + q(e[a]);
			return r;
		}
		return e;
	},
	we = (e, r, a, t, c) => {
		let n = q(e),
			o =
				N[n] ||
				(N[n] = ((u) => {
					let i = 0,
						l = 11;
					for (; i < u.length; ) l = (101 * l + u.charCodeAt(i++)) >>> 0;
					return 'go' + l;
				})(n));
		if (!N[o]) {
			let u =
				n !== e
					? e
					: ((i) => {
							let l,
								D,
								E = [{}];
							for (; (l = Ue.exec(i.replace(Re, ''))); )
								l[4]
									? E.shift()
									: l[3]
										? ((D = l[3].replace(j, ' ').trim()), E.unshift((E[0][D] = E[0][D] || {})))
										: (E[0][l[1]] = l[2].replace(j, ' ').trim());
							return E[0];
						})(e);
			N[o] = M(c ? { ['@keyframes ' + o]: u } : u, a ? '' : '.' + o);
		}
		let y = a && N.g ? N.g : null;
		return (
			a && (N.g = N[o]),
			((u, i, l, D) => {
				D ? (i.data = i.data.replace(D, u)) : i.data.indexOf(u) === -1 && (i.data = l ? u + i.data : i.data + u);
			})(N[o], r, t, y),
			o
		);
	},
	Ke = (e, r, a) =>
		e.reduce((t, c, n) => {
			let o = r[n];
			if (o && o.call) {
				let y = o(a),
					u = (y && y.props && y.props.className) || (/^go/.test(y) && y);
				o = u ? '.' + u : y && typeof y == 'object' ? (y.props ? '' : M(y, '')) : y === !1 ? '' : y;
			}
			return t + c + (o ?? '');
		}, '');
function K(e) {
	let r = this || {},
		a = e.call ? e(r.p) : e;
	return we(
		a.unshift ? (a.raw ? Ke(a, [].slice.call(arguments, 1), r.p) : a.reduce((t, c) => Object.assign(t, c && c.call ? c(r.p) : c), {})) : a,
		Se(r.target),
		r.g,
		r.o,
		r.k,
	);
}
let _, k, W;
K.bind({ g: 1 });
let C = K.bind({ k: 1 });
function Te(e, r, a, t) {
	((M.p = r), (_ = e), (k = a), (W = t));
}
function A(e, r) {
	let a = this || {};
	return function () {
		let t = arguments;
		function c(n, o) {
			let y = Object.assign({}, n),
				u = y.className || c.className;
			((a.p = Object.assign({ theme: k && k() }, y)), (a.o = / *go\d+/.test(u)), (y.className = K.apply(a, t) + (u ? ' ' + u : '')));
			let i = e;
			return (e[0] && ((i = y.as || e), delete y.as), W && i[0] && W(y), _(i, y));
		}
		return c;
	};
}
var Oe = (e) => typeof e == 'function',
	Z = (e, r) => (Oe(e) ? e(r) : e),
	xe = (() => {
		let e = 0;
		return () => (++e).toString();
	})(),
	Be = (() => {
		let e;
		return () => {
			if (e === void 0 && typeof window < 'u') {
				let r = matchMedia('(prefers-reduced-motion: reduce)');
				e = !r || r.matches;
			}
			return e;
		};
	})(),
	Ge = 20,
	ee = 'default',
	re = (e, r) => {
		let { toastLimit: a } = e.settings;
		switch (r.type) {
			case 0:
				return { ...e, toasts: [r.toast, ...e.toasts].slice(0, a) };
			case 1:
				return { ...e, toasts: e.toasts.map((o) => (o.id === r.toast.id ? { ...o, ...r.toast } : o)) };
			case 2:
				let { toast: t } = r;
				return re(e, { type: e.toasts.find((o) => o.id === t.id) ? 1 : 0, toast: t });
			case 3:
				let { toastId: c } = r;
				return { ...e, toasts: e.toasts.map((o) => (o.id === c || c === void 0 ? { ...o, dismissed: !0, visible: !1 } : o)) };
			case 4:
				return r.toastId === void 0 ? { ...e, toasts: [] } : { ...e, toasts: e.toasts.filter((o) => o.id !== r.toastId) };
			case 5:
				return { ...e, pausedAt: r.time };
			case 6:
				let n = r.time - (e.pausedAt || 0);
				return { ...e, pausedAt: void 0, toasts: e.toasts.map((o) => ({ ...o, pauseDuration: o.pauseDuration + n })) };
		}
	},
	$e = [],
	He = { toasts: [], pausedAt: void 0, settings: { toastLimit: Ge } },
	g = {},
	ae = (e, r = ee) => {
		((g[r] = re(g[r] || He, e)),
			$e.forEach(([a, t]) => {
				a === r && t(g[r]);
			}));
	},
	oe = (e) => Object.keys(g).forEach((r) => ae(e, r)),
	Ye = (e) => Object.keys(g).find((r) => g[r].toasts.some((a) => a.id === e)),
	X =
		(e = ee) =>
		(r) => {
			ae(r, e);
		},
	Pe = (e, r = 'blank', a) => ({
		createdAt: Date.now(),
		visible: !0,
		dismissed: !1,
		type: r,
		ariaProps: { role: 'status', 'aria-live': 'polite' },
		message: e,
		pauseDuration: 0,
		...a,
		id: (a == null ? void 0 : a.id) || xe(),
	}),
	S = (e) => (r, a) => {
		let t = Pe(r, e, a);
		return (X(t.toasterId || Ye(t.id))({ type: 2, toast: t }), t.id);
	},
	m = (e, r) => S('blank')(e, r);
m.error = S('error');
m.success = S('success');
m.loading = S('loading');
m.custom = S('custom');
m.dismiss = (e, r) => {
	let a = { type: 3, toastId: e };
	r ? X(r)(a) : oe(a);
};
m.dismissAll = (e) => m.dismiss(void 0, e);
m.remove = (e, r) => {
	let a = { type: 4, toastId: e };
	r ? X(r)(a) : oe(a);
};
m.removeAll = (e) => m.remove(void 0, e);
m.promise = (e, r, a) => {
	let t = m.loading(r.loading, { ...a, ...(a == null ? void 0 : a.loading) });
	return (
		typeof e == 'function' && (e = e()),
		e
			.then((c) => {
				let n = r.success ? Z(r.success, c) : void 0;
				return (n ? m.success(n, { id: t, ...a, ...(a == null ? void 0 : a.success) }) : m.dismiss(t), c);
			})
			.catch((c) => {
				let n = r.error ? Z(r.error, c) : void 0;
				n ? m.error(n, { id: t, ...a, ...(a == null ? void 0 : a.error) }) : m.dismiss(t);
			}),
		e
	);
};
var ke = C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
	We = C`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
	Ze = C`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
	Xe = A('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#ff4b4b'};
  position: relative;
  transform: rotate(45deg);

  animation: ${ke} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${We} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || '#fff'};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ze} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
	Ve = C`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
	Ie = A('div')`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || '#e0e0e0'};
  border-right-color: ${(e) => e.primary || '#616161'};
  animation: ${Ve} 1s linear infinite;
`,
	je = C`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
	Qe = C`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
	ze = A('div')`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || '#61d345'};
  position: relative;
  transform: rotate(45deg);

  animation: ${je} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Qe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || '#fff'};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
	Je = A('div')`
  position: absolute;
`,
	qe = A('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
	_e = C`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
	er = A('div')`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_e} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
	rr = ({ toast: e }) => {
		let { icon: r, type: a, iconTheme: t } = e;
		return r !== void 0
			? typeof r == 'string'
				? d.createElement(er, null, r)
				: r
			: a === 'blank'
				? null
				: d.createElement(
						qe,
						null,
						d.createElement(Ie, { ...t }),
						a !== 'loading' && d.createElement(Je, null, a === 'error' ? d.createElement(Xe, { ...t }) : d.createElement(ze, { ...t })),
					);
	},
	ar = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
	or = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
	nr = '0%{opacity:0;} 100%{opacity:1;}',
	cr = '0%{opacity:1;} 100%{opacity:0;}',
	tr = A('div')`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
	yr = A('div')`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
	ur = (e, r) => {
		let a = e.includes('top') ? 1 : -1,
			[t, c] = Be() ? [nr, cr] : [ar(a), or(a)];
		return { animation: r ? `${C(t)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${C(c)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
	};
d.memo(({ toast: e, position: r, style: a, children: t }) => {
	let c = e.height ? ur(e.position || r || 'top-center', e.visible) : { opacity: 0 },
		n = d.createElement(rr, { toast: e }),
		o = d.createElement(yr, { ...e.ariaProps }, Z(e.message, e));
	return d.createElement(
		tr,
		{ className: e.className, style: { ...c, ...a, ...e.style } },
		typeof t == 'function' ? t({ icon: n, message: o }) : d.createElement(d.Fragment, null, n, o),
	);
});
Te(d.createElement);
K`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
var Q = m;
function w(e) {
	var r;
	try {
		return ((r = J.getAllISOCodes().filter((t) => t.currency === e.toUpperCase())[0]) == null ? void 0 : r.symbol) || e;
	} catch (a) {
		return (console.error('Error getting currency symbol', a), e);
	}
}
const Er = (e) => {
		switch (e.toUpperCase()) {
			case s.DAILY:
				return 'day';
			case s.WEEKLY:
				return 'week';
			case s.MONTHLY:
				return 'month';
			case s.ANNUAL:
				return 'year';
			case s.QUARTERLY:
				return 'quarter';
			case s.HALF_YEARLY:
				return 'half year';
			case s.ONETIME:
				return 'one-time';
			default:
				return '--';
		}
	},
	hr = (e) => {
		switch (e.toUpperCase()) {
			case s.DAILY:
				return 'Daily';
			case s.WEEKLY:
				return 'Weekly';
			case s.MONTHLY:
				return 'Monthly';
			case s.ANNUAL:
				return 'Annually';
			case s.QUARTERLY:
				return 'Quarterly';
			case s.HALF_YEARLY:
				return 'Half Yearly';
			case s.ONETIME:
				return 'One-time';
			default:
				return '--';
		}
	},
	gr = (e) => {
		if (e == null || e === '') return '--';
		switch (String(e).toUpperCase()) {
			case O.FIXED:
				return 'Fixed charge';
			case O.USAGE:
				return 'Usage Based';
			default:
				return '--';
		}
	},
	Lr = (e) => e && e.charAt(0).toUpperCase() + e.slice(1).toLowerCase(),
	vr = (e) => {
		if (!e) return e;
		switch (e.toLowerCase()) {
			case 'events':
				return 'Events';
			case 'invoice':
				return 'Invoice';
			case 'credit_topups':
				return 'Credit Top-ups';
			default:
				return e
					.split('_')
					.map((r) => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase())
					.join(' ');
		}
	},
	Sr = (e) => {
		const r = new Date(e),
			a = { month: 'short', day: 'numeric', year: 'numeric' };
		return r.toLocaleDateString('en-US', a);
	},
	mr = (e, r) =>
		e.type === 'fixed' && e.amount_off
			? Math.min(parseFloat(e.amount_off), r)
			: e.type === 'percentage' && e.percentage_off
				? (r * parseFloat(e.percentage_off)) / 100
				: 0,
	ir = (e, r) => e.reduce((a, t) => a + mr(t, r), 0),
	Ur = (e, r, a, t = []) => {
		let c = '';
		if (e.length > 0) {
			const n = e[0].currency,
				o = ir(t, a),
				y = Math.max(0, a - o);
			((c += `${w(n)}${y.toFixed(2)}`), t.length > 0 && o > 0 && (c += ` (${w(n)}${a.toFixed(2)} - ${w(n)}${o.toFixed(2)} discount)`));
		}
		return (r.length > 0 && (e.length > 0 ? (c += ' + Usage') : (c += 'Depends on usage')), c);
	},
	Rr = async (e, r) => {
		try {
			(await navigator.clipboard.writeText(e), Q.success(r));
		} catch (a) {
			throw (Q.error('Failed to copy to clipboard. Please try again.'), a);
		}
	},
	sr = ({ title: e, value: r, currency: a, isPercent: t = !1, showChangeIndicator: c = !1, isNegative: n = !1, className: o }) => {
		const y = n ? 'text-destructive' : 'text-success',
			u = () => (t ? `${T(r, 2)}%` : a ? `${w(a)} ${T(r, 2)}` : T(r, 2));
		return p.jsxs('div', {
			className: V('bg-white border border-border p-6 flex flex-col gap-3 rounded-lg shadow-sm', o),
			children: [
				p.jsx('p', { className: 'text-sm text-muted-foreground font-medium', children: e }),
				p.jsxs('div', {
					className: 'flex items-center gap-2',
					children: [
						p.jsx('span', { className: 'text-2xl font-bold text-foreground', children: u() }),
						c && p.jsx('span', { className: V('flex items-center', y), children: n ? p.jsx(ne, { size: 20 }) : p.jsx(ce, { size: 20 }) }),
					],
				}),
			],
		});
	};
sr.__docgenInfo = {
	description: 'A card component used to display key performance indicators (KPIs) and metrics.',
	methods: [],
	displayName: 'MetricCard',
	props: {
		title: { required: !0, tsType: { name: 'string' }, description: 'The title/label of the metric' },
		value: { required: !0, tsType: { name: 'number' }, description: 'The numeric value to display' },
		currency: { required: !1, tsType: { name: 'string' }, description: "Optional currency code (e.g., 'USD', 'INR')" },
		isPercent: {
			required: !1,
			tsType: { name: 'boolean' },
			description: 'Whether the value should be displayed as a percentage',
			defaultValue: { value: 'false', computed: !1 },
		},
		showChangeIndicator: {
			required: !1,
			tsType: { name: 'boolean' },
			description: 'Whether to show a trending indicator (arrow)',
			defaultValue: { value: 'false', computed: !1 },
		},
		isNegative: {
			required: !1,
			tsType: { name: 'boolean' },
			description: 'Whether the change is negative (red arrow down) or positive (green arrow up)',
			defaultValue: { value: 'false', computed: !1 },
		},
		className: { required: !1, tsType: { name: 'string' }, description: 'Additional CSS classes for the card' },
	},
};
export {
	Fr as A,
	U as B,
	me as C,
	Er as D,
	x as E,
	pe as F,
	Fe as G,
	fe as H,
	Me as I,
	Ce as J,
	pr as K,
	G as L,
	sr as M,
	Ne as N,
	ge as O,
	se as P,
	Dr as Q,
	$ as R,
	h as S,
	de as T,
	Le as U,
	De as V,
	mr as W,
	vr as X,
	ie as Y,
	fr as Z,
	Rr as _,
	T as a,
	Mr as b,
	he as c,
	R as d,
	P as e,
	Sr as f,
	w as g,
	Ee as h,
	Ae as i,
	Ar as j,
	O as k,
	s as l,
	Ur as m,
	m as n,
	hr as o,
	gr as p,
	L as q,
	Y as r,
	be as s,
	Lr as t,
	B as u,
	le as v,
	ue as w,
	F as x,
	ye as y,
	Q as z,
};
