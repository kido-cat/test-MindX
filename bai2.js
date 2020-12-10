let arr = [];
const a = [{
    name: 'Ha Noi',
    diem: 99,
    GD: 45,
  },
  {
    name: 'HCM',
    diem: 75,
    GD: 39,
  },
  {
    name: 'Khanh Hoa',
    diem: 75,
    GD: 29,
  }
];
a.sort(function(a, b) {
  if (a.diem == b.diem) {
  	return b.GD - a.GD;
  }
  return b.diem - a.diem;
});
a.forEach(function(item) {
  item.thutu = a.indexOf(item) + 1;
});
console.log(a);
