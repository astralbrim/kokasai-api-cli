export const parseCommandOptions = (options): {[option: string]: string} => {
    const optionList = options.opts();
    let optionsMap;
    Object.keys(optionList).forEach(
        (option, index) => {
            if(((options.args[index].slice(0, 1) === "[")))
            {
                optionsMap = {
                    ...optionsMap,
                    [option]: []
                }
                let targetString = options.args[index];
                targetString = targetString.replace("[", "");
                targetString = targetString.replace("]", "");
                const targetStringArray = targetString.split(",")
                targetStringArray.forEach(
                    (str, index) => {
                        optionsMap = {
                            ...optionsMap,
                            [option]: optionsMap[option].concat(str)
                        }
                    }
                )
            }else {
                optionsMap = {
                    ...optionsMap,
                    [option]: options.args[index]
                };
            }
        }
    )
    console.log(optionsMap);
    return optionsMap;
}
