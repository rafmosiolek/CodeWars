/*

Beginner Series #3 Sum of Numbers

Description:

Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

Note! a and b are not ordered!

*/

function GetSum( a,b )
{
   var max = Math.max(a, b);
   var min = Math.min(a, b);
   var result = 0;
   
   for(min; min <= max; min++) {
     result += min;
   }
   return result;
}