//const { sum } = require("../components/sum"); 
import { sum } from "../components/sum.js";


test("calculate sum of 2 numbers",()=>{

    const res = sum(3,4);

    expect(res).toBe(7);
});