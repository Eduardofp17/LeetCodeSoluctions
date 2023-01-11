
var findMedianSortedArrays = function(nums1, nums2) {
    let twoArr = [];
    nums1.map( num => twoArr.push(num));
    nums2.map( num => twoArr.push(num));
    twoArr.sort( (a, b) => {
        if(a > b) return 1;
        if(a< b) return -1;
        return 0.
    })
    if(twoArr.length % 2 === 0){
        let median = (twoArr[(twoArr.length / 2) - 1] + twoArr[((twoArr.length /2 ))]) / 2
        return median;
    }
    let median = ((twoArr.length - 1) / 2);
    return twoArr[median];
};
