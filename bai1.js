let a=[],b=[],c=[];
let n,m;
n = prompt('Moi nhap vao so luong cua mang A');
for(let i = 0 ; i<n ; i++ )
{
	var temp = prompt('Moi nhap');
	a.push(temp);
}
m = prompt('Moi nhap vao so luong cua mang B');
for(let j = 0 ; j<m ; j++ )
{
	var temp = prompt('Moi nhap');
	b.push(temp);
}
c = a.concat(b);
function kiemtra(arr) {
  let d = []
  for (var i = 0; i < arr.length; i++) {
    if (!d.includes(arr[i])) {
      d.push(arr[i])
    }
  }
  alert(d);
  return d;
}
kiemtra(c);