var tanya = true;
while (tanya){

// menangkap pilihan player
var p = prompt('Silahkan pilih :\njempol, telunjuk, kelingking');

// menangkap pilihan computer
// membangkitkan bilangan random
var comp = Math.random();


if (comp < 0.34 ){
    comp ='jempol'
} else if (comp >= 0.34 && comp < 0.67){
    comp ='telunjuk';
} else{
    comp= 'kelingking';  
}

var hasil ='';
// menentukan rules
if (p == comp){
   hasil='SERI'

}else if (p == 'jempol'){
    // if (comp == 'orang'){
    //     hasil= 'MENANG !';
    // } else {
    //     hasil ='KALAH!'
    // }
    hasil = (comp =='telunjuk')? 'MENANG!':'KALAH!';
    // alert ('Kamu memilih '+ p + ' dan Komputer memilih ' + comp + '\nMaka Hasilnya kamu  ' + hasil );

}else if (p=='telunjuk'){
    if (comp=='jempol'){
        hasil='KALAH'
    }else {
        hasil='MENANG !'
    }
    // alert ('Kamu memilih '+ p + ' dan Komputer memilih ' + comp + '\nMaka Hasilnya kamu  ' + hasil );


}else if (p=='kelingking'){
    if (comp=='telunjuk'){
        hasil='KALAH !'
    }else {
        hasil='MENANG !'
    } 

    }else if (prompt != true && p != 'jempol','telunjuk','kelingking'){
    alert('Anda Memasukan Pilihan yang tidak disedikan !')
    alert('Terimasih..')
    exit;
    }

    alert ('Kamu memilih '+ p + ' dan Komputer memilih ' + comp  );
    alert( 'Maka Hasilnya Kamu ' + hasil)
    tanya =confirm('Apakah Ingin Main Lagi ?')
}

    alert('Terimasih Sudah Bermain')