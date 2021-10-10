var moveZeroes = function(nums) {
  var nZ = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nZ] = nums[i];
      nZ++;
    }
  }

  while (nZ < nums.length) {
    nums[nZ] = 0;
    nZ++;
  }
};

var a = [0,1,0,3,12];
// moveZeroes(a);
// console.log(a);



