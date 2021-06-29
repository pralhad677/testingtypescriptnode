export default {
    roots:['<rootDir>/src'],
    
    // transform:{
        
    //     '^.+\\.tsx?$': 'ts-jest'
    // },
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
      },
    testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    moduleFileExtensions:['ts','tsx','js','jsx','json','node'],
    verbose:true,
    
}