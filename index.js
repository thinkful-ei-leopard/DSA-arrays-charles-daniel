 const Array = require('./array')

 function main() {
     Array.SIZE_RATIO = 3;
     let arr = new Array();
     arr.push(3);
     arr.push(5);
     arr.push(15);
     arr.push(19);
     arr.push(45);
     arr.push(10);
     arr.pop();
     arr.pop();
     arr.pop();
     console.log(arr);
     console.log(arr.get(0))
 }

 main()

//  Length with one push is 1, capacity 3, ptr 0
// length with 6 pushes is 6, capacity 12, ptr 3
// Length increased from 1 to 6 because that is the number of elements in the array. 
// capacity increased from 3 to 12 because at the 4th push, the existing capacity of 3 was exceeded, so the capacity tripled to 12 (3x4)
// ptr increased from 0 to 3 because when array length was going to exceed capacity, resize occurred, and ptr was set within allocate to be += size, making it 3. For example, at the next resize at 12, 12 will be the size, added to the existing 3 and ptr will be 15.

// after pops capacity and ptr remain unchanged, but length changes as elements are cleared. capacity is not decreased. 