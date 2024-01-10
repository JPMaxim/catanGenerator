/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'laptop': '1024px'
    },
    extend: {
      backgroundImage: {
        'harbours': "url('./images/ocean.png')",
        'desert': "url('./images/desert.png')",
        'field': "url('./images/field.png')",
        'forest': "url('./images/forest.png')",
        'hill': "url('./images/hill.png')",
        'mountain': "url('./images/mountain.png')"
      },
      colors: {
        'catan-cream': '#F5EC99'
      },
      padding: {
        // padding-top: (img-height / img-width * container-width) 
        // 1581 / 1800 * 75
        'board': '67.875%',
        // 'hex': 
      },
      spacing: {
        '70.5': '70.5%', // b-row1
        '56.2': '56.2%', // b-row2
        '41.8': '41.85%', // b-row3
        '27.5': '27.5%', // b-row4
        '13.1': '13.1%', // b-row5
        '12.5': '12.5%', // l-col1
        '20.3': '20.3%', // l-col2
        '27.9': '27.9%', // l-col3
        '35.1': '35.1%', // l-col4
        '42.8': '42.8%', // l-col5
        '50.1': '50.1%', // l-col6
        '57.8': '57.8%', // l-col7
        '65': '65.05%', // l-col8
        '72.3': '72.3%', // l-col9
        '15.3': '15.3%', // w-hex
        '20': '20%',
        '21': '21%',
        '27.4': '27.35%',
        '27.6': '27.6%',
        '28': '28.2%',
        '30':'30%',
        '35': '35%',
        '40': '40%',
        '42.3': '42.3%',
        '42.5': '42.5%',
        '42.8': '42.8%',
        '45': '47%',
        '49.9': '49.9%',
        '51.5': '51.6%',
        '53.5': '53.5%',
        '57.3': '57.3%',
        '57.5': '57.5%',
        '60': '60%',
        '62': '62%',
        '64.9': '64.9%',
        '80': '80%',
        '100': '100%',
        '123.5': '123.5%'
      },
      borderRadius: {
        "bgCreamDiv": "200px",
        "btn": "20px"
      },
      rotate: {
        "0.5": "0.5deg",
        "0.8": "0.8deg"
      }
    }
  },
  plugins: [],
}

