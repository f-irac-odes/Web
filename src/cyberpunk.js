// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you

export const cyberpunk = {
	name: 'cyberpunk',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "2px",
		"--theme-rounded-container": "4px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #e3e30d 
		"--color-primary-50": "251 251 219", // #fbfbdb
		"--color-primary-100": "249 249 207", // #f9f9cf
		"--color-primary-200": "248 248 195", // #f8f8c3
		"--color-primary-300": "244 244 158", // #f4f49e
		"--color-primary-400": "235 235 86", // #ebeb56
		"--color-primary-500": "227 227 13", // #e3e30d
		"--color-primary-600": "204 204 12", // #cccc0c
		"--color-primary-700": "170 170 10", // #aaaa0a
		"--color-primary-800": "136 136 8", // #888808
		"--color-primary-900": "111 111 6", // #6f6f06
		// secondary | #48480f 
		"--color-secondary-50": "228 228 219", // #e4e4db
		"--color-secondary-100": "218 218 207", // #dadacf
		"--color-secondary-200": "209 209 195", // #d1d1c3
		"--color-secondary-300": "182 182 159", // #b6b69f
		"--color-secondary-400": "127 127 87", // #7f7f57
		"--color-secondary-500": "72 72 15", // #48480f
		"--color-secondary-600": "65 65 14", // #41410e
		"--color-secondary-700": "54 54 11", // #36360b
		"--color-secondary-800": "43 43 9", // #2b2b09
		"--color-secondary-900": "35 35 7", // #232307
		// tertiary | #F609F6 
		"--color-tertiary-50": "254 218 254", // #fedafe
		"--color-tertiary-100": "253 206 253", // #fdcefd
		"--color-tertiary-200": "253 194 253", // #fdc2fd
		"--color-tertiary-300": "251 157 251", // #fb9dfb
		"--color-tertiary-400": "249 83 249", // #f953f9
		"--color-tertiary-500": "246 9 246", // #F609F6
		"--color-tertiary-600": "221 8 221", // #dd08dd
		"--color-tertiary-700": "185 7 185", // #b907b9
		"--color-tertiary-800": "148 5 148", // #940594
		"--color-tertiary-900": "121 4 121", // #790479
		// success | #23cb19 
		"--color-success-50": "222 247 221", // #def7dd
		"--color-success-100": "211 245 209", // #d3f5d1
		"--color-success-200": "200 242 198", // #c8f2c6
		"--color-success-300": "167 234 163", // #a7eaa3
		"--color-success-400": "101 219 94", // #65db5e
		"--color-success-500": "35 203 25", // #23cb19
		"--color-success-600": "32 183 23", // #20b717
		"--color-success-700": "26 152 19", // #1a9813
		"--color-success-800": "21 122 15", // #157a0f
		"--color-success-900": "17 99 12", // #11630c
		// warning | #bd7647 
		"--color-warning-50": "245 234 227", // #f5eae3
		"--color-warning-100": "242 228 218", // #f2e4da
		"--color-warning-200": "239 221 209", // #efddd1
		"--color-warning-300": "229 200 181", // #e5c8b5
		"--color-warning-400": "209 159 126", // #d19f7e
		"--color-warning-500": "189 118 71", // #bd7647
		"--color-warning-600": "170 106 64", // #aa6a40
		"--color-warning-700": "142 89 53", // #8e5935
		"--color-warning-800": "113 71 43", // #71472b
		"--color-warning-900": "93 58 35", // #5d3a23
		// error | #ac1706 
		"--color-error-50": "243 220 218", // #f3dcda
		"--color-error-100": "238 209 205", // #eed1cd
		"--color-error-200": "234 197 193", // #eac5c1
		"--color-error-300": "222 162 155", // #dea29b
		"--color-error-400": "197 93 81", // #c55d51
		"--color-error-500": "172 23 6", // #ac1706
		"--color-error-600": "155 21 5", // #9b1505
		"--color-error-700": "129 17 5", // #811105
		"--color-error-800": "103 14 4", // #670e04
		"--color-error-900": "84 11 3", // #540b03
		// surface | #1D1D58 
		"--color-surface-50": "221 221 230", // #dddde6
		"--color-surface-100": "210 210 222", // #d2d2de
		"--color-surface-200": "199 199 213", // #c7c7d5
		"--color-surface-300": "165 165 188", // #a5a5bc
		"--color-surface-400": "97 97 138", // #61618a
		"--color-surface-500": "29 29 88", // #1D1D58
		"--color-surface-600": "26 26 79", // #1a1a4f
		"--color-surface-700": "22 22 66", // #161642
		"--color-surface-800": "17 17 53", // #111135
		"--color-surface-900": "14 14 43", // #0e0e2b
		
	}
}