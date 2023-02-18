function introduction(name){
    return `Hi, my name is ${name}.`
}
function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional(name, language){
    var input = language
    if (input === undefined){
    input = "JavaScript"
    }    
    return `Hi, my name is ${name} and I am learning to program in ${input}.`
}