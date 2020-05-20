/**
 * Processors regexs
 */
  export default Object.freeze({

    //Post-processors
      post:{
        //Audio
          audio:{
            //Maybe it was impossible to determine wether it was multi subs or multi audio, assuming audio if remaining
              possible_multi_audio:/[Mm]ulti$/,
          },
        //Codecs
          codecs:{
            //Detect multiple DTS version
              dts_hdma_duplicates:/\bdts\b.*\bdts_hdma\b/,
          },
        //Name
          name:{
            //Isolated characters (including dash)
              isolated:[
                /[-_.+,]\s[-_.+,]/g,
                /[\[(]\s[-_.+,]\s[\])]/g,
                /[-_.+,]\s*$/g,
              ],
            //Replace underscore or dots with spaces
              special_to_space:[
                /(?<=[a-z])_(?=[A-Z0-9])/g,
                /(?<=[ A-Za-z0-9一-龯])\.(?=[([A-Za-z一-龯])/g,
                /(?<=[ A-Za-z一-龯])\.(?=[([A-Za-z0-9一-龯])/g,
              ],
          },
        //Serie post-processors
          serie:{
            //Leading zeros
              leading_zero:/^\s*0\d+\s*$/,
            //Maybe it was impossible to match episode number previously (1 is not enough, 4 may be date)
              possible_episode:/\s+(?<episode>\d{2,3})\s*$/,
            //Episode range
              range:/^\s*(?<a>\d+)\s+(?<b>\d+)\s*$/,
            //Single episode
              single:/^\s*(?<a>\d+)\s*$/,
          },
        //Subber
          subber:{
            //Check if attribute may be a possible subber name if none has been detected before
              possible_subber_name:/\[(?<subber>[-A-Za-z&! 0-9.]+)\]/,
          },
      },

    //Pre-processors
      pre:{
        //Name
          name:{
            //Asian content cleaner
              asian_content:[
                /\[(?<content>[一-龯]+)\]/g,
              ],
          },
      },

  })