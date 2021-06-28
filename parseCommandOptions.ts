export const parseCommandOptions = (options): {[option: string]: string} => {
    const optionList = options.opts();
    let optionsMap;
    Object.keys(optionList).forEach(
        (option, index) => {
            optionsMap = {
                ...optionsMap,
                [option]: options.args[index]
            }
        }
    )
    return optionsMap;
}