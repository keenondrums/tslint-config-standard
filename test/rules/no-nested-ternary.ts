const noNestedTernary = (input1: string, input2: string) =>
  input1 === 'test1'
    ? input2 === 'test2'
      ? 'res1'
      : 'res2' 
    : input2 === 'test3'
      ? 'res3'
      : 'res4'
