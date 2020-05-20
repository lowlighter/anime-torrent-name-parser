/**
 * Language related regexs
 */
  export default Object.freeze({

    //Audio
      audio:{
        extract:[
          /(?<jp>\b[Jj]apanese [Aa]udio\b)/,
          /(?<en>\b[Ee]nglish [Dd]ub\b)/,
          /(?<en>\b[[Dd]ubbed [Ee]nglish\b)/,
          /(?<multi>\b[Mm]ulti[-_. ][Aa]udio\b)/,
          /(?<multi>\bMULT[Ii]\b)/,
          /(?<jp>\bJap\b|\bJAP\b)/,
          /(?<en>\bEng\b|\bENG\b)(?!-[Ss][Uu][Bb])/,
          /(?<ita>\bIta\b|\bITA\b)/,
          /(?<fr>\bVF[FR]?\b)/,
          /(?<fr>\bFrench\b)/,
          /(?<fr>\bFre\b)/,
          /(?<fr>\bFRENCH\b)/,
          /(?<jp>\bJP\b)/,
          /(?<sp>\bSpa\b)/,
        ],
        keep:[
          /(?<vo>\bVOSTFR\b|\b[Vv]ostfr\b)/,
        ],
      },

    //Subtitles
      subtitles:{
        extract:[
          /(?<multi>[Mm]ulti[- ][Ll]anguage [Ss]ub(?:title)?s?)/,
          /(?<multi>[Mm]ultiple [Ss]ub(?:title)?s?)/,
          /(?<multi>\b[Mm]ulti[-_. ][Ss]ubs?\b)/,
          /(?<en>\bEnglish subs?\b)/,
          /(?<en>\bENG? SUBS?\b)/,
          /(?<fr>\bVOSTFR|[Vv]ostfr\b)/,
          /[Ss]ubs?\s?[-_.\w]*?(?<fr>[Ff]r)/,
          /SUB\s?[-_.\w+]*?(?<fr>FR)/,
          /[Ss]ubs?\s?[-_.\w]*?(?<ita>[Ii]ta)/,
          /SUB\s?[-_.\w+]*?(?<ita>ITA)/,
          /[Ss]ubs?\s?[-_.\w]*?(?<en>[Ee]ng?)/,
          /SUB\s?[-_.\w+]*?(?<en>ENG?)/,
          /[Ss]ubs?\s?[-_.\w]*?(?<ita>[Pp]l)/,
          /SUB\s?[-_.\w+]*?(?<pl>PL)/,
          /(?<ita>\bIta\b)/,
          /(?<en>\bEng\b)/,
        ],
        keep:[],
      },

  })
