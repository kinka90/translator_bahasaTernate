// public/script.js
(function(){
  'use strict';
  const $ = id => document.getElementById(id);

  // ======================
  // Data Kamus
  // ======================
  const DICT = {
    "Kata Benda": {
      "Keluarga": [
        {"ind":"ayah","ter":"baba","img":"assets/img/ayah.png"},
        {"ind":"ibu","ter":"yaya","img":"assets/img/ibu.png"},
        {"ind":"anak","ter":"ana","img":"img/kucing.png"},
        {"ind":"kakak","ter":"abang","img":"assets/img/kakak.png"},
        {"ind":"adik","ter":"adek","img":"assets/img/anak.png"},
        {"ind":"kakek","ter":"mama","img":"assets/img/kakek.png"},
        {"ind":"nenek","ter":"nene","img":"assets/img/nenek.png"},
        {"ind":"suami","ter":"suami","img":"assets/img/suami.png"},
        {"ind":"istri","ter":"istri","img":"assets/img/istri.png"},
        {"ind":"paman","ter":"om","img":"assets/img/paman.png"},
        {"ind":"bibi","ter":"tante","img":"assets/img/bibi.png"},
        {"ind":"sepupu","ter":"sepupu","img":"assets/img/anak.png"},
        {"ind":"cucu","ter":"cucu","img":"assets/img/anak.png"},
        {"ind":"mertua","ter":"mertua","img":"assets/img/anak.png"},
        {"ind":"menantu","ter":"menantu","img":"assets/img/anak.png"},
        {"ind":"keluarga","ter":"keluarga","img":"assets/img/anak.png"},
        {"ind":"saudara","ter":"saudara","img":"assets/img/anak.png"}
      ],
      "Tubuh": [
        {"ind":"kepala","ter":"ulu","img":"assets/img/kepala.png"},
        {"ind":"dahi","ter":"dahi","img":"assets/img/kepala.png"},
        {"ind":"badan","ter":"badan","img":"assets/img/badan.png"},
        {"ind":"tangan","ter":"tangan","img":"assets/img/tangan.png"},
        {"ind":"kaki","ter":"kaki","img":"assets/img/kaki.png"},
        {"ind":"mata","ter":"mata","img":"assets/img/mata.png"},
        {"ind":"telinga","ter":"telinga","img":"assets/img/telinga.png"},
        {"ind":"hidung","ter":"ilong","img":"assets/img/hidung.png"},
        {"ind":"mulut","ter":"nganga","img":"assets/img/mulut.png"},
        {"ind":"gigi","ter":"ing","img":"assets/img/gigi.png"},
        {"ind":"lidah","ter":"ilong","img":"assets/img/lidah.png"},
        {"ind":"leher","ter":"gulu","img":"assets/img/leher.png"},
        {"ind":"perut","ter":"weteng","img":"assets/img/perut.png"},
        {"ind":"punggung","ter":"punggung","img":"assets/img/punggung.png"},
        {"ind":"dada","ter":"dada","img":"assets/img/dada.png"},
        {"ind":"bahu","ter":"bahu","img":"assets/img/bahu.png"},
        {"ind":"lutut","ter":"lutut","img":"assets/img/lutut.png"},
        {"ind":"siku","ter":"siku","img":"assets/img/siku.png"},
        {"ind":"jari kaki","ter":"jari","img":"assets/img/kaki.png"},
        {"ind":"mata","ter":"lima","img":"assets/img/mata.png"},
        {"ind":"jari tangan","ter":"jari","img":"assets/img/tangan.png"},
        {"ind":"rambut","ter":"rambut","img":"assets/img/rambut.png"},
        {"ind":"jantung","ter":"jantung","img":"assets/img/jantung.png"},
        {"ind":"otak","ter":"otak","img":"assets/img/otak.png"},
        {"ind":"tulang","ter":"tulang","img":"assets/img/tulang.png"},
        {"ind":"darah","ter":"getih","img":"assets/img/darah.png"},
        {"ind":"tulang belakang","ter":"tulang punggung","img":"assets/img/tulang.png"},
        {"ind":"otot","ter":"otot","img":"assets/img/otot.png"},
        {"ind":"kulit","ter":"kulit","img":"assets/img/kulit.png"},
        {"ind":"tulang rusuk","ter":"tulang rusuk","img":"assets/img/tulang.png"},
        {"ind":"usus","ter":"usus","img":"assets/img/usus.png"},
        {"ind":"paru-paru","ter":"paru-paru","img":"assets/img/paru.png"},
        {"ind":"hati","ter":"hati","img":"assets/img/hati.png"},
        {"ind":"ginjal","ter":"ginjal","img":"assets/img/ginjal.png"},
        {"ind":"lambung","ter":"lambung","img":"assets/img/lambung.png"},
        {"ind":"otak kecil","ter":"otak cilik","img":"assets/img/otak.png"},
        {"ind":"otak besar","ter":"otak gede","img":"assets/img/otak.png"},
        {"ind":"tulang ekor","ter":"tulang ekor","img":"assets/img/tulang.png"},
        {"ind":"tulang paha","ter":"tulang paha","img":"assets/img/tulang.png"},
        {"ind":"tulang betis","ter":"tulang betis","img":"assets/img/tulang.png"},
        {"ind":"tulang lengan","ter":"tulang lengan","img":"assets/img/tulang.png"},
        {"ind":"tulang selangka","ter":"tulang selangka","img":"assets/img/tulang.png"},
        {"ind":"tulang kering","ter":"tulang kering","img":"assets/img/tulang.png"},
        {"ind":"tulang telapak tangan","ter":"tulang telapak tangan","img":"assets/img/tulang.png"},
        {"ind":"tulang telapak kaki","ter":"tulang telapak kaki","img":"assets/img/tulang.png"},
        {"ind":"tulang jari tangan","ter":"tulang jari tangan","img":"assets/img/tulang.png"},
        {"ind":"tulang jari kaki","ter":"tulang jari kaki","img":"assets/img/tulang.png"}        
      ],
      "Tempat": [
        {"ind":"rumah","ter":"omah","img":"assets/img/rumah.png"},
        {"ind":"sekolah","ter":"sekolah","img":"assets/img/sekolah.png"},
        {"ind":"kantor","ter":"kantor","img":"assets/img/kantor.png"},
        {"ind":"pasar","ter":"pasar","img":"assets/img/pasar.png"},
        {"ind":"toko","ter":"toko","img":"assets/img/toko.png"},
        {"ind":"restoran","ter":"restoran","img":"assets/img/restoran.png"},
        {"ind":"rumah sakit","ter":"rumah sakit","img":"assets/img/rumah_sakit.png"},
        {"ind":"masjid","ter":"masjid","img":"assets/img/masjid.png"},
        {"ind":"gereja","ter":"greja","img":"assets/img/gereja.png"},
        {"ind":"pura","ter":"pura","img":"assets/img/pura.png"},
        {"ind":"klinik","ter":"klinik","img":"assets/img/klinik.png"},
        {"ind":"hotel","ter":"hotel","img":"assets/img/hotel.png"},
        {"ind":"bandara","ter":"bandara","img":"assets/img/bandara.png"},
        {"ind":"stasiun","ter":"stasiun","img":"assets/img/stasiun.png"},
        {"ind":"terminal","ter":"terminal","img":"assets/img/terminal.png"},
        {"ind":"pelabuhan","ter":"pelabuhan","img":"assets/img/pelabuhan.png"},
        {"ind":"taman","ter":"taman","img":"assets/img/taman.png"},
        {"ind":"lapangan","ter":"lapangan","img":"assets/img/lapangan.png"},
        {"ind":"jalan","ter":"dalane","img":"assets/img/jalan.png"},
        {"ind":"jembatan","ter":"jembatan","img":"assets/img/jembatan.png"},
        {"ind":"toilet","ter":"toilet","img":"assets/img/toilet.png"},
        {"ind":"perpustakaan","ter":"perpustakaan","img":"assets/img/perpustakaan.png"},
        {"ind":"museum","ter":"museum","img":"assets/img/museum.png"},
        {"ind":"bioskop","ter":"bioskop","img":"assets/img/bioskop.png"},
        {"ind":"lapangan olahraga","ter":"lapangan olahraga","img":"assets/img/lapangan.png"},
        {"ind":"kolam renang","ter":"kolam renang","img":"assets/img/kolam_renang.png"}
      ],
      "Alam": [
        {"ind":"gunung","ter":"gunung","img":"assets/img/gunung.png"},
        {"ind":"bukit","ter":"dawuhan","img":"assets/img/bukit.png"},
        {"ind":"lembah","ter":"lembah","img":"assets/img/lembah.png"},
        {"ind":"sungai","ter":"kali","img":"assets/img/sungai.png"},
        {"ind":"laut","ter":"segara","img":"assets/img/laut.png"},
        {"ind":"danau","ter":"danu","img":"assets/img/danau.png"},
        {"ind":"hutan","ter":"alas","img":"assets/img/hutan.png"},
        {"ind":"pantai","ter":"pantai","img":"assets/img/pantai.png"},
        {"ind":"langit","ter":"langit","img":"assets/img/langit.png"},
        {"ind":"bintang","ter":"lintang","img":"assets/img/bintang.png"},
        {"ind":"bulan","ter":"wulan","img":"assets/img/bulan.png"},
        {"ind":"matahari","ter":"srengenge","img":"assets/img/matahari.png"},
        {"ind":"awan","ter":"mega","img":"assets/img/awan.png"},
        {"ind":"hujan","ter":"udan","img":"assets/img/hujan.png"},
        {"ind":"salju","ter":"salju","img":"assets/img/salju.png"},
        {"ind":"petir","ter":"guntur","img":"assets/img/petir.png"},
        {"ind":"pelangi","ter":"pelangi","img":"assets/img/pelangi.png"},
        {"ind":"angin","ter":"angin","img":"assets/img/angin.png"},
        {"ind":"kabut","ter":"kabut","img":"assets/img/kabut.png"},
        {"ind":"gunung berapi","ter":"gunung geni","img":"assets/img/gunung.png"},
        {"ind":"air terjun","ter":"curug","img":"assets/img/air_terjun.png"},
        {"ind":"padang rumput","ter":"padang suket","img":"assets/img/padang_rumput.png"},
        {"ind":"gurun","ter":"gurun","img":"assets/img/gurun.png"},
        {"ind":"hutan hujan","ter":"alas udan","img":"assets/img/hutan.png"},
        {"ind":"laut dalam","ter":"segara jero","img":"assets/img/laut.png"},
        {"ind":"samudra","ter":"samodra","img":"assets/img/laut.png"}
      ],
      "Hewan": [
        {"ind":"anjing","ter":"asu","img":"assets/img/anjing.png"},
        {"ind":"kucing","ter":"kucing","img":"assets/img/kucing.png"},
        {"ind":"burung","ter":"manuk","img":"assets/img/burung.png"},
        {"ind":"ikan","ter":"iwak","img":"assets/img/ikan.png"},
        {"ind":"ayam","ter":"pitik","img":"assets/img/ayam.png"},
        {"ind":"sapi","ter":"sapi","img":"assets/img/sapi.png"},
        {"ind":"kuda","ter":"jaran","img":"assets/img/kuda.png"},
        {"ind":"domba","ter":"wedhus","img":"assets/img/domba.png"},
        {"ind":"kambing","ter":"kambing","img":"assets/img/kambing.png"},
        {"ind":"kerbau","ter":"kerbau","img":"assets/img/kambing.png"},
        {"ind":"biawak","ter":"biawak","img":"assets/img/kambing.png"},
        {"ind":"ayam hutan","ter":"ayam alas","img":"assets/img/ayam_hutan.png"},
        {"ind":"merpati","ter":"merpati","img":"assets/img/merpati.png"},     
        {"ind":"elang","ter":"elang","img":"assets/img/elang.png"},
        {"ind":"burung hantu","ter":"manuk hantu","img":"assets/img/burung_hantu.png"},
        {"ind":"cendrawasih","ter":"cendrawasih","img":"assets/img/cendrawasih.png"},
        {"ind":"tikus","ter":"tikus","img":"assets/img/tikus.png"},
        {"ind":"kelinci","ter":"kelinci","img":"assets/img/kelinci.png"},
        {"ind":"babi hutan","ter":"babi alas","img":"assets/img/babi_hutan.png"},
        {"ind":"babi","ter":"babi","img":"assets/img/babi.png"},
        {"ind":"kelinci","ter":"kelinci","img":"assets/img/kelinci.png"},
        {"ind":"gajah","ter":"gajah","img":"assets/img/gajah.png"},
        {"ind":"harimau","ter":"macan","img":"assets/img/harimau.png"},
        {"ind":"singa","ter":"singa","img":"assets/img/singa.png"},
        {"ind":"beruang","ter":"beruang","img":"assets/img/beruang.png"},
        {"ind":"zebra","ter":"zebra","img":"assets/img/zebra.png"},
        {"ind":"jerapah","ter":"jerapah","img":"assets/img/jerapah.png"},
        {"ind":"monyet","ter":"monyet","img":"assets/img/monyet.png"},
        {"ind":"kera","ter":"kera","img":"assets/img/kera.png"},
        {"ind":"ular","ter":"ular","img":"assets/img/ular.png"},
        {"ind":"katak","ter":"kodok","img":"assets/img/katak.png"},
        {"ind":"kupu-kupu","ter":"kupu-kupu","img":"assets/img/kupu_kupu.png"},
        {"ind":"lebah","ter":"tawon","img":"assets/img/lebah.png"},
        {"ind":"semut","ter":"semut","img":"assets/img/semut.png"},
        {"ind":"nyamuk","ter":"nyamuk","img":"assets/img/nyamuk.png"},
        {"ind":"laba-laba","ter":"laba-laba","img":"assets/img/laba_laba.png"},
        {"ind":"cacing","ter":"cacing","img":"assets/img/cacing.png"},
        {"ind":"kepiting","ter":"kepiting","img":"assets/img/kepiting.png"},
        {"ind":"udang","ter":"udang","img":"assets/img/udang.png"},
        {"ind":"lobster","ter":"lobster","img":"assets/img/lobster.png"},
        {"ind":"gurita","ter":"gurita","img":"assets/img/gurita.png"},
        {"ind":"hiu","ter":"hiu","img":"assets/img/hiu.png"},
        {"ind":"paus","ter":"paus","img":"assets/img/paus.png"},
        {"ind":"lumba-lumba","ter":"lumba-lumba","img":"assets/img/lumba_lumba.png"}, 
        {"ind":"penyu","ter":"penyu","img":"assets/img/penyu.png"},
        {"ind":"kuda laut","ter":"kuda laut","img":"assets/img/kuda_laut.png"},
        {"ind":"bintang laut","ter":"bintang laut","img":"assets/img/bintang_laut.png"},
        {"ind":"udang karang","ter":"udang karang","img":"assets/img/udang_karang.png"},
        {"ind":"belut","ter":"belut","img":"assets/img/belut.png"},
        {"ind":"tuna","ter":"tuna","img":"assets/img/tuna.png"},
        {"ind":"salmon","ter":"salmon","img":"assets/img/salmon.png"},
        {"ind":"trout","ter":"trout","img":"assets/img/trout.png"},
        {"ind":"goby","ter":"goby","img":"assets/img/goby.png"},
        {"ind":"lele","ter":"lele","img":"assets/img/lele.png"},
        {"ind":"gurame","ter":"gurame","img":"assets/img/gurame.png"},
        {"ind":"mas","ter":"mas","img":"assets/img/mas.png"},
        {"ind":"nila","ter":"nila","img":"assets/img/nila.png"},
        {"ind":"bandeng","ter":"bandeng","img":"assets/img/bandeng.png"},
        {"ind":"tenggiri","ter":"tenggiri","img":"assets/img/tenggiri.png"},
        {"ind":"cumi-cumi","ter":"cumi-cumi","img":"assets/img/cumi_cumi.png"},
        {"ind":"kerang","ter":"kerang","img":"assets/img/kerang.png"},
        {"ind":"tirta (kerang besar)","ter":"tirta (kerang gede)","img":"assets/img/tirta.png"}
      ],  
      "Buah-Buahan": [
        {"ind":"apel","ter":"apel","img":"assets/img/apel.png"},
        {"ind":"pisang","ter":"gedhang","img":"assets/img/pisang.png"},
        {"ind":"jeruk","ter":"jeruk","img":"assets/img/jeruk.png"},
        {"ind":"mangga","ter":"mangga","img":"assets/img/mangga.png"},
        {"ind":"nanas","ter":"nanas","img":"assets/img/nanas.png"},
        {"ind":"anggur","ter":"anggur","img":"assets/img/anggur.png"},
        {"ind":"semangka","ter":"semangka","img":"assets/img/semangka.png"},
        {"ind":"melon","ter":"melon","img":"assets/img/melon.png"},
        {"ind":"pepaya","ter":"pepaya","img":"assets/img/pepaya.png"},
        {"ind":"kiwi","ter":"kiwi","img":"assets/img/kiwi.png"},
        {"ind":"stroberi","ter":"stroberi","img":"assets/img/stroberi.png"},
        {"ind":"blueberry","ter":"blueberry","img":"assets/img/blueberry.png"},
        {"ind":"raspberry","ter":"raspberry","img":"assets/img/raspberry.png"},
        {"ind":"blackberry","ter":"blackberry","img":"assets/img/blackberry.png"},
        {"ind":"ceri","ter":"ceri","img":"assets/img/ceri.png"},
        {"ind":"apel hijau","ter":"apel ijo","img":"assets/img/apel_hijau.png"},
        {"ind":"apel merah","ter":"apel abang","img":"assets/img/apel_merah.png"},
        {"ind":"anggur hijau","ter":"anggur ijo","img":"assets/img/anggur_hijau.png"},
        {"ind":"anggur merah","ter":"anggur abang","img":"assets/img/anggur_merah.png"},
        {"ind":"jeruk bali","ter":"jeruk bali","img":"assets/img/jeruk_bali.png"},
        {"ind":"jeruk nipis","ter":"jeruk limo","img":"assets/img/jeruk_nipis.png"},
        {"ind":"jeruk keprok","ter":"jeruk keprok","img":"assets/img/jeruk_keprok.png"},
        {"ind":"mangga muda","ter":"mangga enom","img":"assets/img/mangga_muda.png"},
        {"ind":"mangga matang","ter":"mangga mateng","img":"assets/img/mangga_matang.png"},
        {"ind":"nanas manis","ter":"nanas legi","img":"assets/img/nanas_manis.png"},
        {"ind":"nanas asam","ter":"nanas asem","img":"assets/img/nanas_asam.png"},
        {"ind":"pisang ambon","ter":"gedhang ambon","img":"assets/img/pisang_ambon.png"},
        {"ind":"pisang kepok","ter":"gedhang kepok","img":"assets/img/pisang_kepok.png"},
        {"ind":"pisang raja","ter":"gedhang raja","img":"assets/img/pisang_raja.png"},
        {"ind":"pisang susu","ter":"gedhang susu","img":"assets/img/pisang_susu.png"},
        {"ind":"semangka merah","ter":"semangka abang","img":"assets/img/semangka_merah.png"},
        {"ind":"semangka kuning","ter":"semangka kuning","img":"assets/img/semangka_kuning.png"},
        {"ind":"melon hijau","ter":"melon ijo","img":"assets/img/melon_hijau.png"},
        {"ind":"melon kuning","ter":"melon kuning","img":"assets/img/melon_kuning.png"},
        {"ind":"pepaya merah","ter":"pepaya abang","img":"assets/img/pepaya_merah.png"},
        {"ind":"pepaya kuning","ter":"pepaya kuning","img":"assets/img/pepaya_kuning.png"},
        {"ind":"pala","ter":"pala","img":"assets/img/pala.png"},
        {"ind":"delima","ter":"delima","img":"assets/img/delima.png"},
        {"ind":"kurma","ter":"kurma","img":"assets/img/kurma.png"},
        {"ind":"sirsak","ter":"sirsak","img":"assets/img/sirsak.png"},
        {"ind":"jambu biji","ter":"jambu biji","img":"assets/img/jambu_biji.png"},
        {"ind":"jambu air","ter":"jambu banyu","img":"assets/img/jambu_air.png"},
        {"ind":"jambu semarang","ter":"jambu semarang","img":"assets/img/jambu_semarang.png"},
        {"ind":"manggis","ter":"manggis","img":"assets/img/manggis.png"},
        {"ind":"rambutan","ter":"rambutan","img":"assets/img/rambutan.png"},
        {"ind":"salak","ter":"salak","img":"assets/img/salak.png"},
        {"ind":"sawo","ter":"sawo","img":"assets/img/sawo.png"},
        {"ind":"kedondong","ter":"kedondong","img":"assets/img/kedondong.png"},
        {"ind":"belimbing","ter":"belimbing","img":"assets/img/belimbing.png"},
        {"ind":"buah naga","ter":"buah naga","img":"assets/img/buah_naga.png"},
        {"ind":"markisa","ter":"markisa","img":"assets/img/markisa.png"}, 
        {"ind":"lengkeng","ter":"lengkeng","img":"assets/img/lengkeng.png"},  
        {"ind":"longan","ter":"longan","img":"assets/img/longan.png"},
        {"ind":"kelengkeng","ter":"kelengkeng","img":"assets/img/lengkeng.png"},
        {"ind":"kiwi","ter":"kiwi","img":"assets/img/kiwi.png"},
        {"ind":"avokad","ter":"avokad","img":"assets/img/avokad.png"},
        {"ind":"cempedak","ter":"cempedak","img":"assets/img/cempedak.png"},
        {"ind":"durian","ter":"durian","img":"assets/img/durian.png"},
        {"ind":"sirsak","ter":"sirsak","img":"assets/img/sirsak.png"},
        {"ind":"buah tin","ter":"buah tin","img":"assets/img/buah_tin.png"},
        {"ind":"buah zaitun","ter":"buah zaitun","img":"assets/img/buah_zaitun.png"},
        {"ind":"kelapa","ter":"klapa","img":"assets/img/kelapa.png"},
        {"ind":"kelapa muda","ter":"klapa enom","img":"assets/img/kelapa_muda.png"},
        {"ind":"kelapa tua","ter":"klapa tuwa","img":"assets/img/kelapa_tua.png"},
        {"ind":"santol","ter":"santol","img":"assets/img/santol.png"},
        {"ind":"asam jawa","ter":"asem jawa","img":"assets/img/asam_jawa.png"},
      ],
      "Tumbuhan": [
        {"ind":"pohon","ter":"wit","img":"assets/img/pohon.png"},
        {"ind":"bunga","ter":"kembang","img":"assets/img/bunga.png"},
        {"ind":"rumput","ter":"suket","img":"assets/img/rumput.png"},
        {"ind":"daun","ter":"godhong","img":"assets/img/daun.png"},
        {"ind":"akar","ter":"oyot","img":"assets/img/akar.png"},
        {"ind":"batang","ter":"gagang","img":"assets/img/batang.png"},
        {"ind":"buah","ter":"buah","img":"assets/img/buah.png"},
        {"ind":"padi","ter":"padi","img":"assets/img/padi.png"},
        {"ind":"jagung","ter":"jagung","img":"assets/img/jagung.png"},
        {"ind":"kacang","ter":"kacang","img":"assets/img/kacang.png"},
        {"ind":"tebu","ter":"tebu","img":"assets/img/tebu.png"},
        {"ind":"kelapa sawit","ter":"klapa sawit","img":"assets/img/kelapa_sawit.png"},
        {"ind":"karet","ter":"karet","img":"assets/img/karet.png"},
        {"ind":"kopi","ter":"kopi","img":"assets/img/kopi.png"},
        {"ind":"teh","ter":"teh","img":"assets/img/teh.png"},
        {"ind":"coklat","ter":"coklat","img":"assets/img/coklat.png"},
        {"ind":"kapuk","ter":"kapuk","img":"assets/img/kapuk.png"},
        {"ind":"kayu","ter":"kayu","img":"assets/img/kayu.png"},
        {"ind":"bambu","ter":"bambu","img":"assets/img/bambu.png"},
        {"ind":"singkong","ter":"singkong","img":"assets/img/singkong.png"},
        {"ind":"ubi","ter":"ubi","img":"assets/img/ubi.png"},
        {"ind":"talas","ter":"talas","img":"assets/img/talas.png"},
        {"ind":"ubi jalar","ter":"ubi jalar","img":"assets/img/ubi jalar.png"},
        {"ind":"pohon pisang","ter":"wit gedhang","img":"assets/img/pohon_pisang.png"},
        {"ind":"pohon mangga","ter":"wit mangga","img":"assets/img/pohon_mangga.png"},
        {"ind":"pohon jambu","ter":"wit jambu","img":"assets/img/pohon_jambu.png"},
        {"ind":"bunga mawar","ter":"kembang mawar","img":"assets/img/bunga_mawar.png"},
        {"ind":"bunga melati","ter":"kembang melati","img":"assets/img/bunga_melati.png"},
        {"ind":"bunga matahari","ter":"kembang srengenge","img":"assets/img/bunga_matahari.png"},
        {"ind":"bunga anggrek","ter":"kembang anggrek","img":"assets/img/bunga_anggrek.png"},
        {"ind":"bunga tulip","ter":"kembang tulip","img":"assets/img/bunga_tulip.png"},
        {"ind":"bunga kenanga","ter":"kembang kenanga","img":"assets/img/bunga_kenanga.png"},
        {"ind":"bunga teratai","ter":"kembang teratai","img":"assets/img/bunga_teratai.png"},
        {"ind":"bunga krisan","ter":"kembang krisan","img":"assets/img/bunga_krisan.png"},
        {"ind":"bunga dahlia","ter":"kembang dahlia","img":"assets/img/bunga_dahlia.png"},
        {"ind":"bunga bougenville","ter":"kembang bougenville","img":"assets/img/bunga_bougenville.png"},
        {"ind":"bunga sepatu","ter":"kembang sepatu","img":"assets/img/bunga_sepatu.png"}
      ],
      "Makanan": [
        {"ind":"nasi","ter":"nasi","img":"assets/img/nasi.png"},
        {"ind":"roti","ter":"roti","img":"assets/img/roti.png"},
        {"ind":"telur","ter":"endhog","img":"assets/img/telur.png"},
        {"ind":"daging","ter":"daging","img":"assets/img/daging.png"},
        {"ind":"ikan","ter":"iwak","img":"assets/img/ikan.png"},
        {"ind":"sayur","ter":"sayur","img":"assets/img/sayur.png"},
        {"ind":"buah","ter":"buah","img":"assets/img/buah.png"},
        {"ind":"susu","ter":"susu","img":"assets/img/susu.png"},
        {"ind":"keju","ter":"keju","img":"assets/img/keju.png"},
        {"ind":"mentega","ter":"mentega","img":"assets/img/mentega.png"},
        {"ind":"minyak","ter":"minyak","img":"assets/img/minyak.png"},
        {"ind":"gula","ter":"gula","img":"assets/img/gula.png"},
        {"ind":"garam","ter":"uyah","img":"assets/img/garam.png"},
        {"ind":"lada","ter":"lada","img":"assets/img/lada.png"},
        {"ind":"merica","ter":"merica","img":"assets/img/merica.png"},
        {"ind":"kecap","ter":"kecap","img":"assets/img/kecap.png"},
        {"ind":"saus","ter":"saus","img":"assets/img/saus.png"},
        {"ind":"cuka","ter":"cuka","img":"assets/img/cuka.png"},
        {"ind":"tepung","ter":"tepung","img":"assets/img/tepung.png"},
        {"ind":"mie","ter":"mi","img":"assets/img/mie.png"},
        {"ind":"bihun","ter":"bihun","img":"assets/img/bihun.png"},
        {"ind":"sagu","ter":"sagu","img":"assets/img/sagu.png"},
        {"ind":"jagung","ter":"jagung","img":"assets/img/jagung.png"},
        {"ind":"kentang","ter":"kentang","img":"assets/img/kentang.png"},
        {"ind":"ubi","ter":"ubi","img":"assets/img/ubi.png"},
        {"ind":"singkong","ter":"singkong","img":"assets/img/singkong.png"},
        {"ind":"tempe","ter":"tempe","img":"assets/img/tempe.png"},
        {"ind":"tahu","ter":"tahu","img":"assets/img/tahu.png"},
        {"ind":"sate","ter":"sate","img":"assets/img/sate.png"},
        {"ind":"bakso","ter":"bakso","img":"assets/img/bakso.png"},
        {"ind":"nugget","ter":"nugget","img":"assets/img/nugget.png"},
        {"ind":"sosis","ter":"sosis","img":"assets/img/sosis.png"},
        {"ind":"burger","ter":"burger","img":"assets/img/burger.png"}
      ],
      "Budaya": [
        {"ind":"tari","ter":"tari","img":"assets/img/tari.png"},
        {"ind":"musik","ter":"musik","img":"assets/img/musik.png"},
        {"ind":"adat","ter":"adat","img":"assets/img/adat.png"},
        {"ind":"tarian","ter":"tarian","img":"assets/img/tarian.png"},
        {"ind":"kain tradisonal","ter":"kain tradisonal","img":"assets/img/kain tradisonal.png"},
        {"ind":"pesta","ter":"pesta","img":"assets/img/pesta.png"},
        {"ind":"upacara","ter":"upacara","img":"assets/img/upacara.png"},
        {"ind":"tradisional","ter":"tradisional","img":"assets/img/tradisional.png"},
        {"ind":"lagu","ter":"lagu","img":"assets/img/lagu.png"},
        {"ind":"alat musik","ter":"piranti musik","img":"assets/img/alat_musik.png"},
        {"ind":"pakaian adat","ter":"busana adat","img":"assets/img/pakaian_adat.png"},
        {"ind":"upacara adat","ter":"upacara adat","img":"assets/img/upacara_adat.png"},
        {"ind":"senjata tradisional","ter":"senjata tradisional","img":"assets/img/senjata_tradisional.png"},
        {"ind":"rumah adat","ter":"omah adat","img":"assets/img/rumah_adat.png"},
        {"ind":"tugu","ter":"tugu","img":"assets/img/tugu.png"},
        {"ind":"candi","ter":"candi","img":"assets/img/candi.png"},
        {"ind":"keris","ter":"keris","img":"assets/img/keris.png"},
        {"ind":"batik","ter":"batik","img":"assets/img/batik.png"},
        {"ind":"wayang","ter":"wayang","img":"assets/img/wayang.png"}
      ],
      "Peralatan": [
        {"ind":"komputer","ter":"komputer","img":"assets/img/komputer.png"},
        {"ind":"telepon","ter":"telepon","img":"assets/img/telepon.png"},
        {"ind":"handphone","ter":"hp","img":"assets/img/handphone.png"},
        {"ind":"meja","ter":"meja","img":"assets/img/meja.png"},
        {"ind":"kursi","ter":"kursi","img":"assets/img/kursi.png"},
        {"ind":"lemari","ter":"lemari","img":"assets/img/lemari.png"},
        {"ind":"tempat tidur","ter":"amben","img":"assets/img/tempat_tidur.png"},
        {"ind":"bantal","ter":"bantal","img":"assets/img/bantal.png"},
        {"ind":"guling","ter":"guling","img":"assets/img/guling.png"},
        {"ind":"selimut","ter":"selimut","img":"assets/img/selimut.png"},
        {"ind":"jam","ter":"jam","img":"assets/img/jam.png"},
        {"ind":"kulkas","ter":"kulkas","img":"assets/img/kulkas.png"},
        {"ind":"kompor","ter":"kompor","img":"assets/img/kompor.png"},
        {"ind":"oven","ter":"oven","img":"assets/img/oven.png"},
        {"ind":"microwave","ter":"microwave","img":"assets/img/microwave.png"},
        {"ind":"panci","ter":"panci","img":"assets/img/panci.png"},
        {"ind":"wajan","ter":"wajan","img":"assets/img/wajan.png"},
        {"ind":"sendok","ter":"sendok","img":"assets/img/sendok.png"},
        {"ind":"garpu","ter":"garpu","img":"assets/img/garpu.png"},
        {"ind":"pisau","ter":"pisau","img":"assets/img/pisau.png"},
        {"ind":"piring","ter":"piring","img":"assets/img/piring.png"},
        {"ind":"gelas","ter":"gelas","img":"assets/img/gelas.png"},
        {"ind":"cangkir","ter":"cangkir","img":"assets/img/cangkir.png"},
        {"ind":"botol","ter":"botol","img":"assets/img/botol.png"}
      ],
      "Benda": [
        {"ind":"buku","ter":"buku","img":"assets/img/buku.png"},
        {"ind":"pensil","ter":"pensil","img":"assets/img/pensil.png"},
        {"ind":"pulpen","ter":"bolpoin","img":"assets/img/pulpen.png"},
        {"ind":"penghapus","ter":"penghapus","img":"assets/img/penghapus.png"},
        {"ind":"penggaris","ter":"penggaris","img":"assets/img/penggaris.png"},
        {"ind":"tas","ter":"tas","img":"assets/img/tas.png"},
        {"ind":"dompet","ter":"dompet","img":"assets/img/dompet.png"},
        {"ind":"kunci","ter":"kunci","img":"assets/img/kunci.png"},
        {"ind":"kacamata","ter":"kacamata","img":"assets/img/kacamata.png"},
        {"ind":"cermin","ter":"kaca","img":"assets/img/cermin.png"},
        {"ind":"jam tangan","ter":"jam tangan","img":"assets/img/jam_tangan.png"},
        {"ind":"kalung","ter":"kalung","img":"assets/img/kalung.png"},
        {"ind":"cincin","ter":"cincin","img":"assets/img/cincin.png"},
        {"ind":"anting","ter":"anting","img":"assets/img/anting.png"},
        {"ind":"gelang","ter":"gelang","img":"assets/img/gelang.png"},
        {"ind":"topi","ter":"topi","img":"assets/img/topi.png"},
        {"ind":"payung","ter":"payung","img":"assets/img/payung.png"},
        {"ind":"kartu identitas","ter":"kartu identitas","img":"assets/img/kartu_identitas.png"},
        {"ind":"paspor","ter":"paspor","img":"assets/img/paspor.png"},
        {"ind":"kartu kredit","ter":"kartu kredit","img":"assets/img/kartu_kredit.png"},
        {"ind":"uang","ter":"dhuwit","img":"assets/img/uang.png"},
        {"ind":"peta","ter":"peta","img":"assets/img/peta.png"},
        {"ind":"kompas","ter":"kompas","img":"assets/img/kompas.png"},
        {"ind":"kamera","ter":"kamera","img":"assets/img/kamera.png"},
        {"ind":"radio","ter":"radio","img":"assets/img/radio.png"},
        {"ind":"televisi","ter":"televisi","img":"assets/img/televisi.png"},
        {"ind":"speaker","ter":"speaker","img":"assets/img/speaker.png"},
        {"ind":"headphone","ter":"headphone","img":"assets/img/headphone.png"},
        {"ind":"mikrofon","ter":"mikrofon","img":"assets/img/mikrofon.png"},
        {"ind":"lampu","ter":"lampu","img":"assets/img/lampu.png"},
        {"ind":"laptop","ter":"laptop","img":"assets/img/laptop.png"},
        {"ind":"tablet","ter":"tablet","img":"assets/img/tablet.png"},
        {"ind":"charger","ter":"charger","img":"assets/img/charger.png"},
        {"ind":"flashdisk","ter":"flashdisk","img":"assets/img/flashdisk.png"},
        {"ind":"hard disk eksternal","ter":"hard disk eksternal","img":"assets/img/hard_disk_eksternal.png"},
        {"ind":"printer","ter":"printer","img":"assets/img/printer.png"},
        {"ind":"scanner","ter":"scanner","img":"assets/img/scanner.png"},
        {"ind":"modem","ter":"modem","img":"assets/img/modem.png"},
        {"ind":"router","ter":"router","img":"assets/img/router.png"},
        {"ind":"speaker bluetooth","ter":"speaker bluetooth","img":"assets/img/speaker_bluetooth.png"},
        {"ind":"kamera digital","ter":"kamera digital","img":"assets/img/kamera_digital.png"},
        {"ind":"keranjang","ter":"keranjang","img":"assets/img/keranjang.png"}
      ],
      "Transportasi": [
        {"ind":"mobil","ter":"mobil","img":"assets/img/mobil.png"},
        {"ind":"motor","ter":"motor","img":"assets/img/motor.png"},
        {"ind":"sepeda","ter":"sepedha","img":"assets/img/sepeda.png"},
        {"ind":"bus","ter":"bis","img":"assets/img/bus.png"},
        {"ind":"truk","ter":"truk","img":"assets/img/truk.png"},
        {"ind":"kereta api","ter":"sepur","img":"assets/img/kereta_api.png"},
        {"ind":"pesawat","ter":"pesawat","img":"assets/img/pesawat.png"},
        {"ind":"kapal","ter":"kapal","img":"assets/img/kapal.png"},
        {"ind":"perahu","ter":"perahu","img":"assets/img/perahu.png"},
        {"ind":"becak","ter":"becak","img":"assets/img/becak.png"},
        {"ind":"bajaj","ter":"bajaj","img":"assets/img/bajaj.png"},
        {"ind":"ojek","ter":"ojek","img":"assets/img/ojek.png"},
        {"ind":"taksi","ter":"taksi","img":"assets/img/taksi.png"},
        {"ind":"sepeda motor listrik","ter":"motor listrik","img":"assets/img/motor_listrik.png"},
        {"ind":"skuter listrik","ter":"skuter listrik","img":"assets/img/skuter_listrik.png"},
        {"ind":"kereta bawah tanah","ter":"kereta ngisor tanah","img":"assets/img/kereta_bawah_tanah.png"},
        {"ind":"kereta gantung","ter":"kereta gantung","img":"assets/img/kereta_gantung.png"},
        {"ind":"helikopter","ter":"helikopter","img":"assets/img/helikopter.png"},
        {"ind":"sepeda listrik","ter":"sepedha listrik","img":"assets/img/sepeda_listrik.png"}
      ],
      "Pakaian": [
        {"ind":"baju","ter":"klambi","img":"assets/img/baju.png"},
        {"ind":"celana","ter":"celana","img":"assets/img/celana.png"},
        {"ind":"rok","ter":"rok","img":"assets/img/rok.png"},
        {"ind":"jaket","ter":"jaket","img":"assets/img/jaket.png"},
        {"ind":"sepatu","ter":"sepatu","img":"assets/img/sepatu.png"},
        {"ind":"sandal","ter":"sandal","img":"assets/img/sandal.png"},
        {"ind":"topi","ter":"topi","img":"assets/img/topi.png"},
        {"ind":"kaos kaki","ter":"kaos sikil","img":"assets/img/kaos_kaki.png"},
        {"ind":"sarung tangan","ter":"sarung tangan","img":"assets/img/sarung_tangan.png"},
        {"ind":"dasar","ter":"dasar","img":"assets/img/dasar.png"},
        {"ind":"dasi","ter":"dasi","img":"assets/img/dasi.png"},
        {"ind":"pakaian dalam","ter":"klambi jero","img":"assets/img/pakaian_dalam.png"},
        {"ind":"baju tidur","ter":"klambi turu","img":"assets/img/baju_tidur.png"},
        {"ind":"piyama","ter":"piyama","img":"assets/img/piyama.png"},
        {"ind":"baju renang","ter":"klambi renang","img":"assets/img/baju_renang.png"},
        {"ind":"seragam","ter":"seragam","img":"assets/img/seragam.png"},
        {"ind":"jas","ter":"jas","img":"assets/img/jas.png"},
        {"ind":"blazer","ter":"blazer","img":"assets/img/blazer.png"},
        {"ind":"gaun","ter":"gaun","img":"assets/img/gaun.png"},
        {"ind":"sepatu olahraga","ter":"sepatu olah raga","img":"assets/img/sepatu_olahraga.png"}
      ],

    },
    "Kata Kerja": {
      "Aktivitas Sehari-hari": [
        {"ind":"makan","ter":"oho","img":"assets/img/tidur.png"},
        {"ind":"minum","ter":"minum","img":"assets/img/minum.png"},
        {"ind":"tidur","ter":"turu","img":"assets/img/tidur.png"},
        {"ind":"pergi","ter":"pergi","img":"assets/img/pergi.png"},
        {"ind":"pulang","ter":"pulang","img":"assets/img/pulang.png"},
        {"ind":"bangun tidur","ter":"bangun tidur","img":"assets/img/bangun tidur.png"},
        {"ind":"berjalan","ter":"mlaku","img":"assets/img/berjalan.png"},
        {"ind":"lari","ter":"mlayu","img":"assets/img/lari.png"},
        {"ind":"berlari","ter":"amlayu","img":"assets/img/berlari.png"},
        {"ind":"berenang","ter":"renang","img":"assets/img/berenang.png"},
        {"ind":"melompat","ter":"mlumpat","img":"assets/img/melompat.png"},
        {"ind":"duduk","ter":"lungguh","img":"assets/img/duduk.png"},
        {"ind":"berdiri","ter":"ngadeg","img":"assets/img/berdiri.png"},
        {"ind":"membaca","ter":"maca","img":"assets/img/membaca.png"},
        {"ind":"menulis","ter":"nulis","img":"assets/img/menulis.png"},
        {"ind":"belajar","ter":"sinau","img":"assets/img/belajar.png"},
        {"ind":"mengajar","ter":"ngajar","img":"assets/img/mengajar.png"},
        {"ind":"bermain","ter":"dolanan","img":"assets/img/bermain.png"},
        {"ind":"bekerja","ter":"kerja","img":"assets/img/bekerja.png"},
        {"ind":"berbicara","ter":"omong","img":"assets/img/berbicara.png"},
        {"ind":"mendengarkan","ter":"rungu","img":"assets/img/mendengarkan.png"},
        {"ind":"melihat","ter":"delok","img":"assets/img/melihat.png"},
        {"ind":"mencium (bau)","ter":"cium (ambune)","img":"assets/img/mencium.png"},
        {"ind":"merasa (rasa)","ter":"rasa (rasane)","img":"assets/img/merasa.png"},
        {"ind":"memegang (pegang)","ter":"genggem (genggemane)","img":"assets/img/memegang.png"},
        {"ind":"menyentuh (sentuh)","ter":"tutul (tutulane)","img":"assets/img/menyentuh.png"},
        {"ind":"membersihkan (bersih)","ter":"resik (resikne)","img":"assets/img/membersihkan.png"},
        {"ind":"membuka (buka)","ter":"mbukak (mbukakne)","img":"assets/img/membuka.png"},
        {"ind":"menutup (tutup)","ter":"tutup (tutupne)","img":"assets/img/menutup.png"},
        {"ind":"memasak (masak)","ter":"masak (masakne)","img":"assets/img/memasak.png"},
        {"ind":"membeli (beli)","ter":"tuku (tukune)","img":"assets/img/membeli.png"},
        {"ind":"menjual (jual)","ter":"adol (adoline)","img":"assets/img/menjual.png"},
        {"ind":"membawa (bawa)","ter":"gawa (gawane)","img":"assets/img/membawa.png"},
        {"ind":"mengambil (ambil)","ter":"jupuk (jupukne)","img":"assets/img/mengambil.png"},
        {"ind":"memberi (beri)","ter":"menehi (menehine)","img":"assets/img/memberi.png"},
        {"ind":"menerima (terima)","ter":"nampa (nampane)","img":"assets/img/menerima.png"},
        {"ind":"membantu (bantu)","ter":"mbantu (mbantune)","img":"assets/img/membantu.png"},
        {"ind":"mencari (cari)","ter":"golèk (golèkne)","img":"assets/img/mencari.png"},
        {"ind":"menemukan (temu)","ter":"temu (temune)","img":"assets/img/menemukan.png"},
        {"ind":"mengerti (erti)","ter":"ngerti (ertine)","img":"assets/img/mengerti.png"},
        {"ind":"tidak mengerti (ora erti)","ter":"ora ngerti (ora ertine)","img":"assets/img/tidak_mengerti.png"},
        {"ind":"berpikir (pikir)","ter":"pikir (pikire)","img":"assets/img/berpikir.png"},
        {"ind":"ingat (ingat)","ter":"eling (elinge)","img":"assets/img/ingat.png"},
        {"ind":"lupa (lupa)","ter":"lali (laline)","img":"assets/img/lupa.png"},
        {"ind":"menunggu (tunggu)","ter":"ngenteni (ngentenine)","img":"assets/img/menunggu.png"},
        {"ind":"bertemu (temu)","ter":"ketemu (ketemune)","img":"assets/img/bertemu.png"},
        {"ind":"pergi (pergi)","ter":"mlebu (mlebune)","img":"assets/img/pergi.png"},
        {"ind":"datang (datang)","ter":"tèkè (tèkene)","img":"assets/img/datang.png"},
        {"ind":"pulang (pulang)","ter":"bali (baline)","img":"assets/img/pulang.png"},
        {"ind":"naik (naik)","ter":"munggah (munggahne)","img":"assets/img/naik.png"},
        {"ind":"turun (turun)","ter":"mudhun (mudhune)","img":"assets/img/turun.png"},
        {"ind":"memakai (pakai)","ter":"nganggo (nganggone)","img":"assets/img/memakai.png"},
        {"ind":"melepaskan (lepas)","ter":"mbukak (mbukakne)","img":"assets/img/melepaskan.png"},
        {"ind":"mencuci (cuci)","ter":"ngumbah (ngumbahne)","img":"assets/img/mencuci.png"},
        {"ind":"menyisir (sisir)","ter":"nyisir (nyisirne)","img":"assets/img/menyisir.png"},
        {"ind":"bercukur (cukur)","ter":"nggukur (nggukurne)","img":"assets/img/bercukur.png"},
        {"ind":"mandi (mandi)","ter":"adus (aduse)","img":"assets/img/mandi.png"},
        {"ind":"gosok gigi (gosok gigi)","ter":"sikat untu (sikat untune)","img":"assets/img/gosok_gigi.png"},
        {"ind":"membuat (buat)","ter":"gawe (gaweane)","img":"assets/img/membuat.png"},
        {"ind":"menggambar (gambar)","ter":"nggambari (nggambarine)","img":"assets/img/menggambar.png"},
        {"ind":"memotong (potong)","ter":"motong (motongne)","img":"assets/img/memotong.png"},    
        {"ind":"menyanyi (nyanyi)","ter":"nyanyi (nyanyine)","img":"assets/img/menyanyi.png"},
        {"ind":"menari (tari)","ter":"tari (tarine)","img":"assets/img/menari.png"},
        {"ind":"berdoa (doa)","ter":"ndonga (ndongane)","img":"assets/img/berdoa.png"},
        {"ind":"bermain musik (main musik)","ter":"dolanan musik (dolanan musikne)","img":"assets/img/bermain_musik.png"},
        {"ind":"memotret (foto)","ter":"njupuk foto (njupuk fotone)","img":"assets/img/memotret.png"},
        {"ind":"merekam video (rekam video)","ter":"ngrekam video (ngrekam videone)","img":"assets/img/merekam_video.png"},
        {"ind":"mengendarai (kendara)","ter":"nyopir (nyopirne)","img":"assets/img/mengendarai.png"},
        {"ind":"mengemudi (kemudi)","ter":"nyopir (nyopirne)","img":"assets/img/mengemudi.png"},
        {"ind":"membaca","ter":"membaca","img":"assets/img/membaca.png"},
        {"ind":"menonton","ter":"nonton","img":"assets/img/menonton.png"},
        {"ind":"berbelanja","ter":"belanja","img":"assets/img/berbelanja.png"},
        {"ind":"memelihara (pelihara)","ter":"ngopeni (ngopenine)","img":"assets/img/memelihara.png"},
        {"ind":"merawat (rawat)","ter":"ngopeni (ngopenine)","img":"assets/img/merawat.png"},
        {"ind":"berkebun (kebun)","ter":"tandur (tandurane)","img":"assets/img/berkebun.png"},
        {"ind":"memancing (pancing)","ter":"mancing (mancinge)","img":"assets/img/memancing.png"},  
        {"ind":"berburu (buru)","ter":"mabur (maburane)","img":"assets/img/berburu.png"},
        {"ind":"sedang","ter":"sed","img":"assets/img/tangan.png"},
        {"ind":"sedang makan","ter":"sema","img":"assets/img/tangan.png"},
      ],
      "Gerakan": [
        {"ind":"jalan","ter":"jalan","img":"assets/img/jalan.png"},
        {"ind":"lari","ter":"mlayu","img":"assets/img/lari.png"},
        {"ind":"lompat","ter":"mlumpat","img":"assets/img/lompat.png"},
        {"ind":"duduk","ter":"lungguh","img":"assets/img/duduk.png"},
        {"ind":"berdiri","ter":"ngadeg","img":"assets/img/berdiri.png"},
        {"ind":"jongkok","ter":"ngangkuk","img":"assets/img/jongkok.png"},
        {"ind":"merangkak","ter":"ngretek","img":"assets/img/merangkak.png"},
        {"ind":"membungkuk","ter":"ngungkuk","img":"assets/img/membungkuk.png"},
        {"ind":"naik","ter":"naik","img":"assets/img/naik.png"},
        {"ind":"turun","ter":"mudhun","img":"assets/img/turun.png"},
        {"ind":"masuk","ter":"masuk","img":"assets/img/masuk.png"},
        {"ind":"keluar","ter":"metu","img":"assets/img/keluar.png"},
        {"ind":"pegang","ter":"pegang","img":"assets/img/pegang.png"},
        {"ind":"sentuh","ter":"tutul","img":"assets/img/sentuh.png"},
        {"ind":"tolak","ter":"tulak","img":"assets/img/tolak.png"},
        {"ind":"tarik","ter":"tarik","img":"assets/img/tarik.png"},
        {"ind":"angkat","ter":"angkat","img":"assets/img/angkat.png"},
        {"ind":"jatuh","ter":"turu","img":"assets/img/jatuh.png"},
        {"ind":"guling","ter":"guling","img":"assets/img/guling.png"},
        {"ind":"menggelinding","ter":"ngguling","img":"assets/img/menggelinding.png"},
        {"ind":"lempar","ter":"lempar","img":"assets/img/lempar.png"},
        {"ind":"berputar","ter":"muter","img":"assets/img/berputar.png"},
        {"ind":"mengelilingi","ter":"ngubengi","img":"assets/img/mengelilingi.png"},
        {"ind":"menyusuri","ter":"nyusuri","img":"assets/img/menyusuri.png"},
        {"ind":"mendaki","ter":"munggah","img":"assets/img/mendaki.png"},
        {"ind":"berlari","ter":"mlayu","img":"assets/img/lari.png"},
        {"ind":"menyelinap","ter":"nyelip","img":"assets/img/menyelinap.png"},
        {"ind":"merayap","ter":"ngretek","img":"assets/img/merayap.png"},
        {"ind":"memanjat","ter":"munggah","img":"assets/img/memanjat.png"},
        {"ind":"mendorong","ter":"tulak","img":"assets/img/mendorong.png"},
        {"ind":"menarik","ter":"tarik","img":"assets/img/menarik.png"},
        {"ind":"mengangkat","ter":"angkat","img":"assets/img/mengangkat.png"},  
        {"ind":"angkat","ter":"angkat","img":"assets/img/angkat.png"},
        {"ind":"turunkan","ter":"mudhunno","img":"assets/img/turunkan.png"},
        {"ind":"dorong","ter":"tulak","img":"assets/img/dorong.png"},
        {"ind":"tarik","ter":"tarik","img":"assets/img/tarik.png"},
        {"ind":"putar","ter":"puter","img":"assets/img/putar.png"},
        {"ind":"goyang","ter":"goyang","img":"assets/img/goyang.png"},
        {"ind":"angkat tangan","ter":"angkat tangan","img":"assets/img/angkat_tangan.png"},
        {"ind":"tepuk tangan","ter":"plok tangan","img":"assets/img/tepuk_tangan.png"},
        {"ind":"jabat tangan","ter":"salam tangan","img":"assets/img/jabat_tangan.png"},
        {"ind":"salaman","ter":"salam tangan","img":"assets/img/salaman.png"},
        {"ind":"melambai","ter":"lambaian tangan","img":"assets/img/melambai.png"},
        {"ind":"mengangguk","ter":"ngangguk","img":"assets/img/mengangguk.png"},
        {"ind":"menggeleng","ter":"nggoyangno","img":"assets/img/menggeleng.png"},
        {"ind":"menggaruk","ter":"nggaruk","img":"assets/img/menggaruk.png"}
      ],
      "pekerjaan": [
        {"ind":"bekerja","ter":"kerja","img":"assets/img/bekerja.png"},
        {"ind":"menanam","ter":"menanam","img":"assets/img/menanam.png"},
        {"ind":"memanen","ter":"panen","img":"assets/img/memanen.png"},
        {"ind":"memotong rumput","ter":"motong suket","img":"assets/img/memotong_rumput.png"},
        {"ind":"menggembala","ter":"nggembala","img":"assets/img/menggembala.png"},
        {"ind":"memerah susu","ter":"nyedot susu","img":"assets/img/memerah_susu.png"},
        {"ind":"memetik buah","ter":"njupuk woh","img":"assets/img/memetik_buah.png"},
        {"ind":"mengajar","ter":"ngajar","img":"assets/img/mengajar.png"},
        {"ind":"belajar","ter":"sinau","img":"assets/img/belajar.png"},
        {"ind":"memasak","ter":"masak","img":"assets/img/memasak.png"},
        {"ind":"menjahit","ter":"njahit","img":"assets/img/menjahit.png"},
        {"ind":"menyanyi","ter":"nyanyi","img":"assets/img/menyanyi.png"},
        {"ind":"menari","ter":"tari","img":"assets/img/menari.png"},
        {"ind":"melukis","ter":"nggambari","img":"assets/img/melukis.png"},
        {"ind":"menggambar","ter":"nggambari","img":"assets/img/menggambar.png"},
        {"ind":"memotret","ter":"njupuk foto","img":"assets/img/memotret.png"},
        {"ind":"merekam","ter":"ngrekam video","img":"assets/img/merekam.png"},
        {"ind":"menulis","ter":"nulis","img":"assets/img/menulis.png"},
        {"ind":"membaca","ter":"maca","img":"assets/img/membaca.png"},
        {"ind":"membeli","ter":"tuku","img":"assets/img/membeli.png"},
        {"ind":"menjual","ter":"adol","img":"assets/img/menjual.png"},
        {"ind":"memancing","ter":"mancing","img":"assets/img/memancing.png"},
        {"ind":"berburu","ter":"mabur","img":"assets/img/berburu.png"},
        {"ind":"bertani","ter":"tandur","img":"assets/img/bertani.png"},
        {"ind":"berkebun","ter":"tandur","img":"assets/img/berkebun.png"},
        {"ind":"memelihara","ter":"ngopeni","img":"assets/img/memelihara.png"},
        {"ind":"merawat","ter":"ngopeni","img":"assets/img/merawat.png"},
        {"ind":"membantu","ter":"mbantu","img":"assets/img/membantu.png"},
        {"ind":"membersihkan","ter":"resik","img":"assets/img/membersihkan.png"},
        {"ind":"mencuci","ter":"ngumbah","img":"assets/img/mencuci.png"},
        {"ind":"menyapu","ter":"nyapu","img":"assets/img/menyapu.png"},
        {"ind":"mengelap","ter":"ngelap","img":"assets/img/mengelap.png"},
        {"ind":"menyetrika","ter":"nyetrika","img":"assets/img/menyetrika.png"},
        {"ind":"memotong","ter":"motong","img":"assets/img/memotong.png"},
        {"ind":"membuat","ter":"gawe","img":"assets/img/membuat.png"},
        {"ind":"memperbaiki","ter":"ndandani","img":"assets/img/memperbaiki.png"},
        {"ind":"mengendarai","ter":"nyopir","img":"assets/img/mengendarai.png"},
        {"ind":"mengemudi","ter":"nyopir","img":"assets/img/mengemudi.png"},
        {"ind":"menyetir","ter":"nyopir","img":"assets/img/menyetir.png"}
      ],
      "Sosial": [
        {"ind":"sapa","ter":"sapa","img":"assets/img/sapa.png"},
        {"ind":"menyapa","ter":"nyapa","img":"assets/img/menyapa.png"},
        {"ind":"salam","ter":"salam","img":"assets/img/salam.png"},
        {"ind":"tolong","ter":"tolong","img":"assets/img/tolong.png"},
        {"ind":"terima kasih","ter":"matur nuwun","img":"assets/img/terima_kasih.png"},
        {"ind":"maaf","ter":"ngapunten","img":"assets/img/maaf.png"},
        {"ind":"permisi","ter":"permisi","img":"assets/img/permisi.png"},
        {"ind":"kasih","ter":"kasih","img":"assets/img/kasih.png"},
        {"ind":"ambil","ter":"ambil","img":"assets/img/ambil.png"},
        {"ind":"senyum","ter":"senyum","img":"assets/img/senyum.png"},
        {"ind":"tersenyum","ter":"mesem","img":"assets/img/tersenyum.png"},
        {"ind":"marah","ter":"marah","img":"assets/img/marah.png"},
        {"ind":"peluk","ter":"peluk","img":"assets/img/peluk.png"},
        {"ind":"memeluk","ter":"ngemut","img":"assets/img/memeluk.png"},
        {"ind":"cium","ter":"cium","img":"assets/img/cium.png"},
        {"ind":"mencium","ter":"cium","img":"assets/img/mencium.png"},
        {"ind":"selamat","ter":"slamet","img":"assets/img/selamat.png"},
        {"ind":"selamat datang","ter":"slamet rawuh","img":"assets/img/selamat_datang.png"},
        {"ind":"sampai jumpa","ter":"ketemu meneh","img":"assets/img/sampai_jumpa.png"},
        {"ind":"selamat tinggal","ter":"slamet tinggal","img":"assets/img/selamat_tinggal.png"},
        {"ind":"selamat jalan","ter":"slamet dalan","img":"assets/img/selamat_jalan.png"},
        {"ind":"selamat pagi","ter":"slamet enjing","img":"assets/img/selamat_pagi.png"},
        {"ind":"selamat siang","ter":"slamet awan","img":"assets/img/selamat_siang.png"},
        {"ind":"selamat sore","ter":"slamet sonten","img":"assets/img/selamat_sore.png"},
        {"ind":"selamat malam","ter":"slamet bengi","img":"assets/img/selamat_malam.png"},
        {"ind":"bersalaman","ter":"salam tangan","img":"assets/img/bersalaman.png"},
        {"ind":"tanya","ter":"tanya","img":"assets/img/tanya.png"},
        {"ind":"bertanya","ter":"nanya","img":"assets/img/bertanya.png"},
        {"ind":"jawab","ter":"jawab","img":"assets/img/jawab.png"},
        {"ind":"menjawab","ter":"mbales","img":"assets/img/menjawab.png"},
        {"ind":"mengundang","ter":"ngundang","img":"assets/img/mengundang.png"},
        {"ind":"mengunjungi","ter":"ngunjungi","img":"assets/img/mengunjungi.png"},
        {"ind":"bicara","ter":"bicara","img":"assets/img/bicara.png"},
        {"ind":"mengobrol","ter":"ngobrol","img":"assets/img/mengobrol.png"},
        {"ind":"dengar","ter":"dengar","img":"assets/img/dengar.png"},
        {"ind":"mendengar","ter":"rungu","img":"assets/img/mendengar.png"},  
        {"ind":"bertemu","ter":"ketemu","img":"assets/img/bertemu.png"},
        {"ind":"berkunjung","ter":"dolanan","img":"assets/img/berkunjung.png"},
        {"ind":"berpesta","ter":"pesta","img":"assets/img/berpesta.png"},
        {"ind":"merayakan","ter":"ngrayakno","img":"assets/img/merayakan.png"},
        {"ind":"berdoa","ter":"ndonga","img":"assets/img/berdoa.png"},
        {"ind":"bersosialisasi","ter":"sosialisasi","img":"assets/img/bersosialisasi.png"},
        {"ind":"berbicara","ter":"omong","img":"assets/img/berbicara.png"},
        {"ind":"mengobrol","ter":"ngobrol","img":"assets/img/mengobrol.png"},
        {"ind":"bercanda","ter":"guyon","img":"assets/img/bercanda.png"},
        {"ind":"tertawa","ter":"guyu","img":"assets/img/tertawa.png"}
      ],
    },
    "Kata Sifat": {
      "Ukuran": [
        {"ind":"besar","ter":"gedhe","img":"assets/img/besar.png"},
        {"ind":"kecil","ter":"cilik","img":"assets/img/kecil.png"},
        {"ind":"panjang","ter":"dawa","img":"assets/img/panjang.png"},
        {"ind":"pendek","ter":"cekak","img":"assets/img/pendek.png"},
        {"ind":"tinggi","ter":"dhuwur","img":"assets/img/tinggi.png"},
        {"ind":"rendah","ter":"endhek","img":"assets/img/rendah.png"},
        {"ind":"cepat","ter":"cepet","img":"assets/img/cepat.png"},
        {"ind":"lambat","ter":"alot","img":"assets/img/lambat.png"},
        {"ind":"baru","ter":"anyar","img":"assets/img/baru.png"},
        {"ind":"lama","ter":"lawas","img":"assets/img/lama.png"},
        {"ind":"panas","ter":"panas","img":"assets/img/panas.png"},
        {"ind":"dingin","ter":"adhem","img":"assets/img/dingin.png"},
        {"ind":"hangat","ter":"anget","img":"assets/img/hangat.png"},
        {"ind":"berat","ter":"abote","img":"assets/img/berat.png"},
        {"ind":"ringan","ter":"enteng","img":"assets/img/ringan.png"},
        {"ind":"lebar","ter":"ambane","img":"assets/img/lebar.png"},
        {"ind":"sempit","ter":"sempit","img":"assets/img/sempit.png"},
        {"ind":"tebal","ter":"kandel","img":"assets/img/tebal.png"},
        {"ind":"tipis","ter":"tipis","img":"assets/img/tipis.png"},
        {"ind":"kuat","ter":"kuat","img":"assets/img/kuat.png"},
        {"ind":"lemah","ter":"ringkih","img":"assets/img/lemah.png"}
      ],
      "Warna": [
        {"ind":"merah","ter":"abang","img":"assets/img/merah.png"},
        {"ind":"biru","ter":"biru","img":"assets/img/biru.png"},
        {"ind":"kuning","ter":"kuning","img":"assets/img/kuning.png"},
        {"ind":"hijau","ter":"ijo","img":"assets/img/hijau.png"},
        {"ind":"hitam","ter":"ireng","img":"assets/img/hitam.png"},
        {"ind":"putih","ter":"putih","img":"assets/img/putih.png"},
        {"ind":"abu-abu","ter":"abu-abu","img":"assets/img/abu_abu.png"},
        {"ind":"coklat","ter":"coklat","img":"assets/img/coklat.png"},
        {"ind":"jingga","ter":"oranye","img":"assets/img/jingga.png"},  
        {"ind":"ungu","ter":"ungu","img":"assets/img/ungu.png"},
        {"ind":"merah muda","ter":"abang jambu","img":"assets/img/merah_muda.png"},
        {"ind":"emas","ter":"emas","img":"assets/img/emas.png"},
        {"ind":"perak","ter":"perak","img":"assets/img/perak.png"},
        {"ind":"transparan","ter":"tembus pandang","img":"assets/img/transparan.png"},
        {"ind":"warna-warni","ter":"warna-warni","img":"assets/img/warna_warni.png"},
        {"ind":"pink","ter":"pink","img":"assets/img/pink.png"}
      ],
      "Bentuk": [
        {"ind":"bulat","ter":"bunder","img":"assets/img/bulat.png"},
        {"ind":"persegi","ter":"persegi","img":"assets/img/persegi.png"},
        {"ind":"persegi panjang","ter":"persegi dawa","img":"assets/img/persegi_panjang.png"},
        {"ind":"segitiga","ter":"segitiga","img":"assets/img/segitiga.png"},
        {"ind":"oval","ter":"oval","img":"assets/img/oval.png"},
        {"ind":"bentuk hati","ter":"bentuk wedi","img":"assets/img/hati.png"},
        {"ind":"bintang","ter":"lintang","img":"assets/img/bintang.png"},
        {"ind":"lancip","ter":"runcing","img":"assets/img/lancip.png"},
        {"ind":"tumpul","ter":"tumpul","img":"assets/img/tumpul.png"},
        {"ind":"bergelombang","ter":"ombak-ombak","img":"assets/img/bergelombang.png"},
        {"ind":"berbintik","ter":"bintik-bintik","img":"assets/img/berbintik.png"},
        {"ind":"bergaris","ter":"garis-garis","img":"assets/img/bergaris.png"},
        {"ind":"bermotif","ter":"motif-motif","img":"assets/img/bermotif.png"},
        {"ind":"bertekstur","ter":"tekstur-tekstur","img":"assets/img/bertekstur.png"}
      ],
      "Keadaan/Perasaan": [
        {"ind":"senang","ter":"seneng","img":"assets/img/senang.png"},
        {"ind":"sedih","ter":"sedhih","img":"assets/img/sedih.png"},
        {"ind":"marah","ter":"marah","img":"assets/img/marah.png"},
        {"ind":"takut","ter":"wedhi","img":"assets/img/takut.png"},   
        {"ind":"malu","ter":"isin","img":"assets/img/malu.png"},
        {"ind":"bangga","ter":"bangga","img":"assets/img/bangga.png"},
        {"ind":"lelah","ter":"kepenak","img":"assets/img/lelah.png"},
        {"ind":"bosan","ter":"bosen","img":"assets/img/bosan.png"},
        {"ind":"terkejut","ter":"kaget","img":"assets/img/terkejut.png"},
        {"ind":"jijik","ter":"mual","img":"assets/img/jijik.png"},
        {"ind":"pusing","ter":"pusing","img":"assets/img/pusing.png"},
        {"ind":"lapar","ter":"luwe","img":"assets/img/lapar.png"},
        {"ind":"haus","ter":"ngelak","img":"assets/img/haus.png"},
        {"ind":"kenyang","ter":"wareg","img":"assets/img/kenyang.png"},
        {"ind":"sehat","ter":"sehat","img":"assets/img/sehat.png"},
        {"ind":"sakit","ter":"sakit","img":"assets/img/sakit.png"},
        {"ind":"capek","ter":"capek","img":"assets/img/capek.png"},
        {"ind":"kaya","ter":"kaya","img":"assets/img/kaya.png"},
        {"ind":"miskin","ter":"miskin","img":"assets/img/miskin.png"},
        {"ind":"bersih","ter":"resik","img":"assets/img/bersih.png"},
        {"ind":"kotor","ter":"reged","img":"assets/img/kotor.png"},
        {"ind":"ramai","ter":"ramai","img":"assets/img/ramai.png"},
        {"ind":"sepi","ter":"sepi","img":"assets/img/sepi.png"},
        {"ind":"sibuk","ter":"sibuk","img":"assets/img/sibuk.png"},
        {"ind":"tenang","ter":"tentrem","img":"assets/img/tenang.png"}
      ],
      "Rasa": [
        {"ind":"manis","ter":"legit","img":"assets/img/manis.png"},
        {"ind":"asin","ter":"asin","img":"assets/img/asin.png"},
        {"ind":"asam","ter":"asem","img":"assets/img/asam.png"},      
        {"ind":"pahit","ter":"pait","img":"assets/img/pahit.png"},
        {"ind":"pedas","ter":"pedhes","img":"assets/img/pedas.png"},
        {"ind":"segar","ter":"seger","img":"assets/img/segar.png"},
        {"ind":"bau","ter":"ambune","img":"assets/img/bau.png"},
        {"ind":"harum","ter":"wangi","img":"assets/img/harum.png"},
        {"ind":"lembut","ter":"alus","img":"assets/img/lembut.png"},
        {"ind":"kasar","ter":"kekar","img":"assets/img/kasar.png"},
        {"ind":"licin","ter":"licin","img":"assets/img/licin.png"},
        {"ind":"lengket","ter":"lengket","img":"assets/img/lengket.png"},
        {"ind":"kering","ter":"garing","img":"assets/img/kering.png"},
        {"ind":"basah","ter":"basa","img":"assets/img/basah.png"},
        {"ind":"berminyak","ter":"minyakan","img":"assets/img/berminyak.png"},
        {"ind":"berbusa","ter":"busa-busa","img":"assets/img/berbusa.png"},
        {"ind":"berdebu","ter":"debu-debu","img":"assets/img/berdebu.png"},
        {"ind":"berpasir","ter":"pasir-pasir","img":"assets/img/berpasir.png"}
      ],
      "Kondisi": [
        {"ind":"panas","ter":"panas","img":"assets/img/panas.png"},
        {"ind":"dingin","ter":"adhem","img":"assets/img/dingin.png"},
        {"ind":"hangat","ter":"anget","img":"assets/img/hangat.png"},
        {"ind":"kering","ter":"kering","img":"assets/img/kering.png"},
        {"ind":"basah","ter":"basa","img":"assets/img/basah.png"},
        {"ind":"berangin","ter":"anginan","img":"assets/img/berangin.png"},
        {"ind":"berawan","ter":"udanan","img":"assets/img/berawan.png"},
        {"ind":"hujan","ter":"udan","img":"assets/img/hujan.png"},
        {"ind":"cerah","ter":"cerah","img":"assets/img/cerah.png"},
        {"ind":"berpetir","ter":"badhog","img":"assets/img/berpetir.png"},
        {"ind":"berkilat","ter":"kilat","img":"assets/img/berkilat.png"},
        {"ind":"licin","ter":"licin","img":"assets/img/licin.png"},
        {"ind":"kasar","ter":"kasar","img":"assets/img/kasar.png"},
        {"ind":"halus","ter":"halus","img":"assets/img/halus.png"},
        {"ind":"kuat","ter":"kuat","img":"assets/img/kuat.png"},
        {"ind":"lemah","ter":"ringkih","img":"assets/img/lemah.png"},
        {"ind":"cepat","ter":"cepat","img":"assets/img/cepat.png"},
        {"ind":"lambat","ter":"alot","img":"assets/img/lambat.png"},
        {"ind":"bersih","ter":"resik","img":"assets/img/bersih.png"},
        {"ind":"kotor","ter":"reged","img":"assets/img/kotor.png"},
        {"ind":"rapi","ter":"rapi","img":"assets/img/rapi.png"},
        {"ind":"berantakan","ter":"amburadul","img":"assets/img/berantakan.png"},
        {"ind":"terang","ter":"padhang","img":"assets/img/terang.png"},
        {"ind":"gelap","ter":"peteng","img":"assets/img/gelap.png"},
        {"ind":"lucu","ter":"lucu","img":"assets/img/lucu.png"},
        {"ind":"aneh","ter":"aneh","img":"assets/img/aneh.png"},
        {"ind":"indah","ter":"endah","img":"assets/img/indah.png"},
        {"ind":"cantik","ter":"ayune","img":"assets/img/cantik.png"},
        {"ind":"tampan","ter":"ganteng","img":"assets/img/tampan.png"},
        {"ind":"jelek","ter":"jorok","img":"assets/img/jelek.png"},
        {"ind":"bagus","ter":"apik","img":"assets/img/bagus.png"},
        {"ind":"buruk","ter":"ala","img":"assets/img/buruk.png"},
        {"ind":"mendung","ter":"mendung","img":"assets/img/mendung.png"},
        {"ind":"rapi","ter":"rapi","img":"assets/img/rapi.png"},
        {"ind":"baru","ter":"anyar","img":"assets/img/baru.png"},
        {"ind":"lama","ter":"lawas","img":"assets/img/lama.png"},
        {"ind":"rusak","ter":"rusak","img":"assets/img/rusak.png"},
        {"ind":"patah","ter":"pecah","img":"assets/img/patah.png"}
      ],
      "Karakter": [
        {"ind":"baik","ter":"apik","img":"assets/img/baik.png"},
        {"ind":"jahat","ter":"ala","img":"assets/img/jahat.png"},
        {"ind":"ramah","ter":"ramah","img":"assets/img/ramah.png"},
        {"ind":"pendiam","ter":"meneng","img":"assets/img/pendiam.png"},
        {"ind":"sombong","ter":"sombong","img":"assets/img/sombong.png"},
        {"ind":"pemalu","ter":"isin","img":"assets/img/pemalu.png"},
        {"ind":"jujur","ter":"jujur","img":"assets/img/jujur.png"},
        {"ind":"sopan","ter":"sopan","img":"assets/img/sopan.png"},
        {"ind":"kasar","ter":"kekar","img":"assets/img/kasar.png"},
        {"ind":"nakal","ter":"nakal","img":"assets/img/nakal.png"},
        {"ind":"marah","ter":"marah","img":"assets/img/marah.png"},
        {"ind":"senang","ter":"senang","img":"assets/img/senang.png"},
        {"ind":"sedih","ter":"sedhih","img":"assets/img/sedih.png"},
        {"ind":"bohong","ter":"goroh","img":"assets/img/bohong.png"},
        {"ind":"pembohong","ter":"pembohong","img":"assets/img/pembohong.png"},
        {"ind":"rajin","ter":"rajin","img":"assets/img/rajin.png"},
        {"ind":"malas","ter":"malas","img":"assets/img/malas.png"},
        {"ind":"pintar","ter":"pinter","img":"assets/img/pintar.png"},
        {"ind":"bodoh","ter":"bego","img":"assets/img/bodoh.png"},
        {"ind":"berani","ter":"berani","img":"assets/img/berani.png"},
        {"ind":"penakut","ter":"wedi","img":"assets/img/penakut.png"},
        {"ind":"setia","ter":"setia","img":"assets/img/setia.png"},
        {"ind":"pengkhianat","ter":"pengkhianat","img":"assets/img/pengkhianat.png"},
        {"ind":"sabar","ter":"sabar","img":"assets/img/sabar.png"},
        {"ind":"pemarah","ter":"pemarah","img":"assets/img/pemarahan.png"},
        {"ind":"pemaaf","ter":"pemaaf","img":"assets/img/pemaaf.png"},
        {"ind":"toleran","ter":"toleran","img":"assets/img/toleran.png"},
        {"ind":"pendendam","ter":"pendendam","img":"assets/img/pendendam.png"},
        {"ind":"dermawan","ter":"dermawan","img":"assets/img/dermawan.png"},
        {"ind":"pelit","ter":"pelit","img":"assets/img/pelit.png"},
        {"ind":"optimis","ter":"optimis","img":"assets/img/optimis.png"},
        {"ind":"pesimis","ter":"pesimis","img":"assets/img/pesimis.png"},
        {"ind":"bijaksana","ter":"bijaksana","img":"assets/img/bijaksana.png"}
      ], 
      
    },
    "Kata Ganti": {
      "orang": [
        {"ind":"saya","ter":"aku","img":"assets/img/saya.png"},
        {"ind":"aku","ter":"ku","img":"assets/img/aku.png"},
        {"ind":"kamu","ter":"kowe","img":"assets/img/kamu.png"},
        {"ind":"anda","ter":"sampeyan","img":"assets/img/anda.png"},
        {"ind":"dia (laki-laki)","ter":"dheweke (lanang)","img":"assets/img/dia_laki.png"},
        {"ind":"dia (perempuan)","ter":"dheweke (wadon)","img":"assets/img/dia_perempuan.png"},   
        {"ind":"kami","ter":"kita","img":"assets/img/kami.png"},
        {"ind":"kita","ter":"kita","img":"assets/img/kita.png"},
        {"ind":"mereka","ter":"dheweke","img":"assets/img/mereka.png"},
        {"ind":"siapa","ter":"sopo","img":"assets/img/siapa.png"},
        {"ind":"semua orang","ter":"kabeh wong","img":"assets/img/semua_orang.png"},
        {"ind":"setiap orang","ter":"saben wong","img":"assets/img/setiap_orang.png"},
        {"ind":"orang lain","ter":"wong liya","img":"assets/img/orang_lain.png"},
        {"ind":"teman","ter":"kanca","img":"assets/img/teman.png"},
        {"ind":"teman laki-laki","ter":"kanca lanang","img":"assets/img/teman_laki.png"},
        {"ind":"teman perempuan","ter":"kanca wadon","img":"assets/img/teman_perempuan.png"}
      ],
      "Kepemilikan": [
        {"ind":"milik saya","ter":"duwe aku","img":"assets/img/milik_saya.png"},
        {"ind":"milikku","ter":"duwe aku","img":"assets/img/milikku.png"},
        {"ind":"milikmu","ter":"duwe kowe","img":"assets/img/milikmu.png"},
        {"ind":"miliknya (laki-laki)","ter":"duwe dheweke (lanang)","img":"assets/img/miliknya_laki.png"},
        {"ind":"miliknya (perempuan)","ter":"duwe dheweke (wadon)","img":"assets/img/miliknya_perempuan.png"},
        {"ind":"milik kita/kami","ter":"duwe kita","img":"assets/img/milik_kita.png"},
        {"ind":"milik mereka","ter":"duwe dheweke","img":"assets/img/milik_mereka.png"},
        {"ind":"milik orang itu","ter":"duwe wong kuwi","img":"assets/img/milik_orang_itu.png"},
        {"ind":"milik siapa","ter":"duwe sopo","img":"assets/img/milik_siapa.png"},
        {"ind":"milik teman","ter":"duwe kanca","img":"assets/img/milik_teman.png"},
        {"ind":"milik","ter":"duwe","img":"assets/img/milik.png"}
      ],
      "Penunjuk": [
        {"ind":"ini","ter":"iki","img":"assets/img/ini.png"},
        {"ind":"itu","ter":"kuwi","img":"assets/img/itu.png"},
        {"ind":"sini","ter":"mriki","img":"assets/img/sini.png"},
        {"ind":"situ","ter":"mrana","img":"assets/img/situ.png"},
        {"ind":"sana","ter":"mrana","img":"assets/img/sana.png"},
        {"ind":"atas","ter":"atas","img":"assets/img/atas.png"},
        {"ind":"bawah","ter":"ngisor","img":"assets/img/bawah.png"},
        {"ind":"depan","ter":"ngarep","img":"assets/img/depan.png"},
        {"ind":"belakang","ter":"mburi","img":"assets/img/belakang.png"},
        {"ind":"dalam","ter":"jeru","img":"assets/img/dalam.png"},
        {"ind":"luar","ter":"njaba","img":"assets/img/luar.png"},
        {"ind":"sebelah","ter":"samping","img":"assets/img/sebelah.png"},
        {"ind":"samping","ter":"samping","img":"assets/img/samping.png"},
        {"ind":"tengah","ter":"tengah","img":"assets/img/tengah.png"}
      ],
      "Tanya": [
        {"ind":"siapa","ter":"sopo","img":"assets/img/siapa.png"},
        {"ind":"apa","ter":"apa","img":"assets/img/apa.png"},
        {"ind":"dimana","ter":"dimana","img":"assets/img/dimana.png"},
        {"ind":"kenapa","ter":"kenapa","img":"assets/img/kenapa.png"},
        {"ind":"mana","ter":"endi","img":"assets/img/mana.png"},
        {"ind":"mengapa","ter":"ngopo","img":"assets/img/mengapa.png"},
        {"ind":"bagaimana","ter":"kepriye","img":"assets/img/bagaimana.png"},
        {"ind":"kapan","ter":"kapan","img":"assets/img/kapan.png"},
        {"ind":"berapa","ter":"pira","img":"assets/img/berapa.png"}
      ],
      "Angka": [
        {"ind":"satu","ter":"siji","img":"assets/img/satu.png"},
        {"ind":"dua","ter":"loro","img":"assets/img/dua.png"},
        {"ind":"tiga","ter":"telu","img":"assets/img/tiga.png"},
        {"ind":"empat","ter":"papat","img":"assets/img/empat.png"},
        {"ind":"lima","ter":"limo","img":"assets/img/lima.png"},
        {"ind":"enam","ter":"enem","img":"assets/img/enam.png"},
        {"ind":"tujuh","ter":"pitu","img":"assets/img/tujuh.png"},
        {"ind":"delapan","ter":"wolu","img":"assets/img/delapan.png"},
        {"ind":"sembilan","ter":"sanga","img":"assets/img/sembilan.png"},
        {"ind":"sepuluh","ter":"sepuluh","img":"assets/img/sepuluh.png"},
        {"ind":"sebelas","ter":"sewelas","img":"assets/img/sebelas.png"},
        {"ind":"dua belas","ter":"rolas","img":"assets/img/dua_belas.png"},
        {"ind":"tiga belas","ter":"telulas","img":"assets/img/tiga_belas.png"}, 
        {"ind":"dua puluh","ter":"dua puluh","img":"assets/img/dua puluh.png"},
        {"ind":"tiga puluh","ter":"telu puluh","img":"assets/img/tiga_puluh.png"},
        {"ind":"empat puluh","ter":"papat puluh","img":"assets/img/empat_puluh.png"},
        {"ind":"lima puluh","ter":"limo puluh","img":"assets/img/lima_puluh.png"},
        {"ind":"seratus","ter":"satus","img":"assets/img/seratus.png"},
        {"ind":"seribu","ter":"sewu","img":"assets/img/seribu.png"},
        {"ind":"satu juta","ter":"siji yuta","img":"assets/img/satu_juta.png"},
        {"ind":"nol","ter":"nol","img":"assets/img/nol.png"},
        {"ind":"nol (angka)","ter":"nol","img":"assets/img/nol_angka.png"},
        {"ind":"angka","ter":"angka","img":"assets/img/angka.png"},
        {"ind":"angka-angka","ter":"angka-angka","img":"assets/img/angka_angka.png"},
        {"ind":"satuan","ter":"satuan","img":"assets/img/satuan.png"},
        {"ind":"belasan","ter":"belasan","img":"assets/img/belasan.png"},
        {"ind":"belas","ter":"belas","img":"assets/img/belas.png"},
        {"ind":"puluhan","ter":"puluhan","img":"assets/img/puluhan.png"},
        {"ind":"puluh","ter":"puluh","img":"assets/img/puluh.png"},
        {"ind":"ratusan","ter":"atusan","img":"assets/img/ratusan.png"},
        {"ind":"ratus","ter":"atus","img":"assets/img/ratus.png"},
        {"ind":"ribuan","ter":"ewuhan","img":"assets/img/ribuan.png"},
        {"ind":"ribu","ter":"ewu","img":"assets/img/ribu.png"},
        {"ind":"jutaan","ter":"jutaan","img":"assets/img/jutaan.png"},
        {"ind":"juta","ter":"juta","img":"assets/img/juta.png"},
        {"ind":"miliaran","ter":"miliaran","img":"assets/img/miliaran.png"},
        {"ind":"miliar","ter":"miliar","img":"assets/img/miliar.png"},
        {"ind":"triliunan","ter":"triliunan","img":"assets/img/triliunan.png"},
        {"ind":"triliun","ter":"triliun","img":"assets/img/triliun.png"}
      ],
      "Bilangan Ordinal": [
        {"ind":"pertama","ter":"sepisan","img":"assets/img/pertama.png"},
        {"ind":"kedua","ter":"kapindho","img":"assets/img/kedua.png"},
        {"ind":"ketiga","ter":"katelu","img":"assets/img/ketiga.png"},
        {"ind":"keempat","ter":"kapapat","img":"assets/img/keempat.png"},
        {"ind":"kelima","ter":"kalimo","img":"assets/img/kelima.png"},
        {"ind":"keenam","ter":"kaenem","img":"assets/img/keenam.png"},   
        {"ind":"ketujuh","ter":"kapitu","img":"assets/img/ketujuh.png"},
        {"ind":"kedelapan","ter":"kawolu","img":"assets/img/kedelapan.png"},
        {"ind":"kesembilan","ter":"kasanga","img":"assets/img/kesembilan.png"},
        {"ind":"kesepuluh","ter":"kasepuluh","img":"assets/img/kesepuluh.png"},
        {"ind":"kesebelas","ter":"kasuwelas","img":"assets/img/kesebelas.png"},
        {"ind":"kedua belas","ter":"kalolas","img":"assets/img/kedua_belas.png"},
        {"ind":"keseratus","ter":"keseratus","img":"assets/img/keseratus.png"},
        {"ind":"keseribu","ter":"kesewu","img":"assets/img/keseribu.png"}
      ],
      "Lain-Lain": [
        {"ind":"banyak","ter":"akeh","img":"assets/img/banyak.png"},
        {"ind":"sedikit","ter":"sethithik","img":"assets/img/sedikit.png"},
        {"ind":"beberapa","ter":"sawetara","img":"assets/img/beberapa.png"},
        {"ind":"sejumlah","ter":"sejumlah","img":"assets/img/sejumlah.png"},
        {"ind":"seluruh","ter":"sakabehe","img":"assets/img/seluruh.png"},
        {"ind":"setiap","ter":"saben","img":"assets/img/setiap.png"},
        {"ind":"semua","ter":"kabeh","img":"assets/img/semua.png"},
        {"ind":"tiap","ter":"saben","img":"assets/img/tiap.png"},
        {"ind":"lainnya","ter":"liyane","img":"assets/img/lainnya.png"}
      ],
    },
    "Kata Keterangan": {
      "Waktu": [
        {"ind":"sekarang","ter":"saiki","img":"assets/img/sekarang.png"},
        {"ind":"nanti","ter":"mengko","img":"assets/img/nanti.png"},
        {"ind":"kemarin","ter":"wingi","img":"assets/img/kemarin.png"},
        {"ind":"besok","ter":"sesuk","img":"assets/img/besok.png"},
        {"ind":"lusa","ter":"sawise sesuk","img":"assets/img/lusa.png"},
        {"ind":"tadi","ter":"wengi","img":"assets/img/tadi.png"},
        {"ind":"dulu","ter":"dulu","img":"assets/img/dulu.png"},
        {"ind":"sebentar","ter":"sebentar","img":"assets/img/sebentar.png"},
        {"ind":"segera","ter":"enggal","img":"assets/img/segera.png"},
        {"ind":"sudah","ter":"sudah","img":"assets/img/sudah.png"},
        {"ind":"belum","ter":"belum","img":"assets/img/belum.png"},
        {"ind":"selalu","ter":"tansah","img":"assets/img/selalu.png"},
        {"ind":"sering","ter":"asring","img":"assets/img/sering.png"},
        {"ind":"kadang-kadang","ter":"kadhang-kadhang","img":"assets/img/kadang_kadang.png"},
        {"ind":"jarang","ter":"jarang","img":"assets/img/jarang.png"},
        {"ind":"tidak pernah","ter":"ora tau","img":"assets/img/tidak_pernah.png"},
        {"ind":"setelah","ter":"sawise","img":"assets/img/setelah.png"},
        {"ind":"sebelum","ter":"sadurunge","img":"assets/img/sebelum.png"},
        {"ind":"selama","ter":"sajrone","img":"assets/img/selama.png"},
        {"ind":"sementara","ter":"sawetara","img":"assets/img/sementara.png"},
        {"ind":"baru saja","ter":"bar wae","img":"assets/img/baru_saja.png"},
        {"ind":"lama","ter":"suwe","img":"assets/img/lama.png"},
        {"ind":"tiba-tiba","ter":"kedadak","img":"assets/img/tiba_tiba.png"},
        {"ind":"akhirnya","ter":"pungkasane","img":"assets/img/akhirnya.png"},
        {"ind":"selanjutnya","ter":"sabanjure","img":"assets/img/selanjutnya.png"},
        {"ind":"terakhir","ter":"pungkasan","img":"assets/img/terakhir.png"}
      ],
      "Cara": [
        {"ind":"pelan-pelan","ter":"pelan-pelan","img":"assets/img/pelan-pelan.png"},
        {"ind":"cepat","ter":"cepat","img":"assets/img/cepat.png"},
        {"ind":"diam-diam","ter":"diam-diam","img":"assets/img/diam-diam.png"},
        {"ind":"sungguh-sungguh","ter":"sungguh-sungguh","img":"assets/img/sungguh-sungguh.png"},
        {"ind":"sembarangan","ter":"sembarangan","img":"assets/img/sembarangan.png"},
        {"ind":"sepenuhnya","ter":"sepenuhnya","img":"assets/img/sepenuhnya.png"},
        {"ind":"terburu-buru","ter":"keburu-keburu","img":"assets/img/terburu-buru.png"},
        {"ind":"hati-hati","ter":"ati-ati","img":"assets/img/hati-hati.png"},
        {"ind":"berani-berani","ter":"berani-berani","img":"assets/img/berani-berani.png"},
        {"ind":"setengah-setengah","ter":"setengah-setengah","img":"assets/img/setengah-setengah.png"},
        {"ind":"setengah","ter":"setengah","img":"assets/img/setengah.png"},
        {"ind":"sambil","ter":"sambil","img":"assets/img/sambil.png"},
        {"ind":"sendirian","ter":"dewekan","img":"assets/img/sendirian.png"},
        {"ind":"bersama-sama","ter":"bareng-bareng","img":"assets/img/bersama-sama.png"},
        {"ind":"terus-menerus","ter":"terus-terusan","img":"assets/img/terus-menerus.png"},
        {"ind":"sekali-sekali","ter":"sawijining-sawijining","img":"assets/img/sekali-sekali.png"},
        {"ind":"sedikit demi sedikit","ter":"sethithik demi sethithik","img":"assets/img/sedikit_demi_sedikit.png"},
        {"ind":"perlahan-lahan","ter":"alon-alon","img":"assets/img/perlahan-lahan.png"},
        {"ind":"mudah","ter":" gampang","img":"assets/img/dengan_mudah.png"},
        {"ind":"susah payah","ter":" susah payah","img":"assets/img/dengan_susah.png"}
      ],
      "Derajat": [
        {"ind":"sangat","ter":"sangat","img":"assets/img/sangat.png"},
        {"ind":"terlalu","ter":"kakehan","img":"assets/img/terlalu.png"},
        {"ind":"cukup","ter":"cukup","img":"assets/img/cukup.png"},
        {"ind":"agak","ter":"agak","img":"assets/img/agak.png"},
        {"ind":"sedikit","ter":"sethithik","img":"assets/img/sedikit.png"},
        {"ind":"lebih","ter":"luwih","img":"assets/img/lebih.png"},
        {"ind":"paling","ter":"paling","img":"assets/img/paling.png"},
        {"ind":"kurang","ter":"kurang","img":"assets/img/kurang.png"},
        {"ind":"hampir","ter":"meh","img":"assets/img/hampir.png"},
        {"ind":"hampir saja","ter":"meh wae","img":"assets/img/hampir_saja.png"},
        {"ind":"sebenarnya","ter":"sakjane","img":"assets/img/sebenarnya.png"},
        {"ind":"betul-betul","ter":"temenan","img":"assets/img/betul-betul.png"},
        {"ind":"pasti","ter":"pasti","img":"assets/img/pasti.png"},
        {"ind":"mungkin","ter":"mbok menawa","img":"assets/img/mungkin.png"},
        {"ind":"barangkali","ter":"barangkali","img":"assets/img/barangkali.png"},    
        {"ind":"tentu","ter":"mesthi","img":"assets/img/tentu.png"},
        {"ind":"sejauh","ter":"sajauh","img":"assets/img/sejauh.png"},
        {"ind":"sedalam","ter":"sedalam","img":"assets/img/sedalam.png"},
        {"ind":"setinggi","ter":"setinggi","img":"assets/img/setinggi.png"},
        {"ind":"serendah","ter":"serendah","img":"assets/img/serendah.png"},
        {"ind":"secepat","ter":"secepat","img":"assets/img/secepat.png"},
        {"ind":"selambat","ter":"selambat","img":"assets/img/selambat.png"},
        {"ind":"sebaik","ter":"sebaik","img":"assets/img/sebaik.png"},
        {"ind":"seburuk","ter":"seburuk","img":"assets/img/seburuk.png"}
      ],
      "Frekuensi": [
        {"ind":"sekali","ter":"sekali","img":"assets/img/sekali.png"},
        {"ind":"dua kali","ter":"loro kaping","img":"assets/img/dua_kali.png"},
        {"ind":"selalu","ter":"selalu","img":"assets/img/selalu.png"},
        {"ind":"sering","ter":"asring","img":"assets/img/sering.png"},
        {"ind":"kadang-kadang","ter":"kadhang-kadhang","img":"assets/img/kadang_kadang.png"},
        {"ind":"jarang","ter":"jarang","img":"assets/img/jarang.png"},
        {"ind":"berulangkali","ter":"berulangkali","img":"assets/img/berulangkali.png"},
        {"ind":"tidak pernah","ter":"ora tau","img":"assets/img/tidak_pernah.png"}
      ],
      "Afirmasi & Nagasi": [
        {"ind":"ya","ter":"ya","img":"assets/img/ya.png"},
        {"ind":"iya","ter":"iyo","img":"assets/img/iya.png"},
        {"ind":"benar","ter":"bener","img":"assets/img/benar.png"},
        {"ind":"setuju","ter":"setuju","img":"assets/img/setuju.png"},
        {"ind":"tidak","ter":"ora","img":"assets/img/tidak.png"},
        {"ind":"bukan","ter":"dudu","img":"assets/img/bukan.png"},
        {"ind":"mungkin","ter":"mbok menawa","img":"assets/img/mungkin.png"},
        {"ind":"barangkali","ter":"barangkali","img":"assets/img/barangkali.png"},    
        {"ind":"tentu","ter":"mesthi","img":"assets/img/tentu.png"},
        {"ind":"pasti","ter":"pasti","img":"assets/img/pasti.png"},
        {"ind":"sebenarnya","ter":"sakjane","img":"assets/img/sebenarnya.png"},
        {"ind":"betul-betul","ter":"temenan","img":"assets/img/betul-betul.png"},
        {"ind":"tidak juga","ter":"ora uga","img":"assets/img/tidak_juga.png"},
        {"ind":"jangan","ter":"aja","img":"assets/img/jangan.png"},
        {"ind":"jangan sampai","ter":"aja nganti","img":"assets/img/jangan_sampai.png"},
        {"ind":"belum tentu","ter":"durung mesthi","img":"assets/img/belum_tentu.png"}
      ],
    },
    "Preposisi": {
      "Kata Depan": [
        {"ind":"di","ter":"ning","img":"assets/img/di.png"},
        {"ind":"ke","ter":"meneh","img":"assets/img/ke.png"},
        {"ind":"dari","ter":"saka","img":"assets/img/dari.png"},
        {"ind":"dengan","ter":"karo","img":"assets/img/dengan.png"},
        {"ind":"untuk","ter":"kanggo","img":"assets/img/untuk.png"},
        {"ind":"tentang","ter":"babagan","img":"assets/img/tentang.png"},
        {"ind":"pada","ter":"ing","img":"assets/img/pada.png"},
        {"ind":"seperti","ter":"kaya","img":"assets/img/seperti.png"},
        {"ind":"tanpa","ter":"tanpa","img":"assets/img/tanpa.png"},
        {"ind":"antara","ter":"antara","img":"assets/img/antara.png"},
        {"ind":"selain","ter":"kajaba","img":"assets/img/selain.png"},
        {"ind":"melalui","ter":"liwat","img":"assets/img/melalui.png"},
        {"ind":"menurut","ter":"miturut","img":"assets/img/menurut.png"},
        {"ind":"terhadap","ter":"ngadhepi","img":"assets/img/terhadap.png"},
        {"ind":"sejak","ter":"wiwit","img":"assets/img/sejak.png"},
        {"ind":"sampai","ter":"nganti","img":"assets/img/sampai.png"},
        {"ind":"selama","ter":"sajrone","img":"assets/img/selama.png"},
        {"ind":"oleh","ter":"déning","img":"assets/img/oleh.png"},
        {"ind":"guna","ter":"guna","img":"assets/img/guna.png"},
        {"ind":"seperti","ter":"seperti","img":"assets/img/seperti.png"},
        {"ind":"sebagai","ter":"sebagai","img":"assets/img/sebagai.png"},
        {"ind":"ibarat","ter":"ibarat","img":"assets/img/ibarat.png"},
        {"ind":"layaknya","ter":"kaya dene","img":"assets/img/layaknya.png"},
        {"ind":"seolah-olah","ter":"kaya dene","img":"assets/img/seolah_olah.png"},
        {"ind":"sebagaimana","ter":"sebagaimana","img":"assets/img/sebagaimana.png"}
      ],
     
    },
    "Konjungsi": {
      "Kata Sambung": [
        {"ind":"dan","ter":"lan","img":"assets/img/dan.png"},
        {"ind":"atau","ter":"utawa","img":"assets/img/atau.png"},
        {"ind":"tetapi","ter":"nanging","img":"assets/img/tetapi.png"},
        {"ind":"karena","ter":"amarga","img":"assets/img/karena.png"},
        {"ind":"sehingga","ter":"saéngga","img":"assets/img/sehingga.png"},
        {"ind":"jika","ter":"yen","img":"assets/img/jika.png"},
        {"ind":"serta","ter":"serta","img":"assets/img/serta.png"},
        {"ind":"kalau","ter":"yen","img":"assets/img/kalau.png"},
        {"ind":"maupun","ter":"maupun","img":"assets/img/maupun.png"},
        {"ind":"sedangkan","ter":"sedangkan","img":"assets/img/sedangkan.png"},
        {"ind":"padahal","ter":"padahal","img":"assets/img/padahal.png"},
        {"ind":"malainkan","ter":"malainkan","img":"assets/img/malainkan.png"},
        {"ind":"meskipun","ter":"sanajan","img":"assets/img/meskipun.png"},
        {"ind":"walaupun","ter":"sanajan","img":"assets/img/walaupun.png"},
        {"ind":"sementara","ter":"dening","img":"assets/img/sementara.png"},
        {"ind":"lalu","ter":"banjur","img":"assets/img/lalu.png"},
        {"ind":"kemudian","ter":"banjur","img":"assets/img/kemudian.png"},
        {"ind":"selain itu","ter":"kajaba iku","img":"assets/img/selain_itu.png"},
        {"ind":"bahkan","ter":"malah","img":"assets/img/bahkan.png"},
        {"ind":"apalagi","ter":"apalagi","img":"assets/img/apalagi.png"},
        {"ind":"yaitu","ter":"yaiku","img":"assets/img/yaitu.png"},
        {"ind":"bahwa","ter":"menawa","img":"assets/img/bahwa.png"},
        {"ind":"supaya","ter":"supaya","img":"assets/img/supaya.png"},
        {"ind":"agar","ter":"supaya","img":"assets/img/agar.png"},
        {"ind":"sebab","ter":"amarga","img":"assets/img/sebab.png"},
        {"ind":"demi","ter":"demi","img":"assets/img/demi.png"},
        {"ind":"ayo","ter":"ayo","img":"assets/img/ayo.png"},
        {"ind":"biar","ter":"biar","img":"assets/img/biar.png"},
        {"ind":"bahwa","ter":"menawa","img":"assets/img/bahwa.png"}
      ],
      "Artikula":[
        {"ind":"si","ter":"si","img":"assets/img/si.png"},
        {"ind":"sang","ter":"sang","img":"assets/img/sang.png"},
        {"ind":"para","ter":"para","img":"assets/img/para.png"},
        {"ind":"yang","ter":"sing","img":"assets/img/yang.png"},
        {"ind":"sebuah","ter":"siji","img":"assets/img/sebuah.png"},
        {"ind":"seorang","ter":"siji","img":"assets/img/seorang.png"},
      ],
    },
    "Onomatope": {
      "Kata Tiruan Bunyi": [
        {"ind":"meong","ter":"meong","img":"assets/img/meong.png"},
        {"ind":"gonggong","ter":"guk-guk","img":"assets/img/gonggong.png"},
        {"ind":"kukuruyuk","ter":"kukuruyuk","img":"assets/img/kukuruyuk.png"},
        {"ind":"kring-kring","ter":"kring-kring","img":"assets/img/kring_kring.png"},
        {"ind":"ciap-ciap","ter":"ciap-ciap","img":"assets/img/ciap_ciap.png"},
        {"ind":"kwek-kwek","ter":"kwek-kwek","img":"assets/img/kwek_kwek.png"}
      ],
      "Bunyi Alam": [        
        {"ind":"gemericik","ter":"gemricik","img":"assets/img/gemericik.png"},
        {"ind":"gemuruh","ter":"gemuruh","img":"assets/img/gemuruh.png"},
        {"ind":"gempa","ter":"gempa","img":"assets/img/gempa.png"},
        {"ind":"deru","ter":"deru","img":"assets/img/deru.png"},
        {"ind":"deru-deru","ter":"deru-deru","img":"assets/img/deru_deru.png"},
        {"ind":"degup","ter":"degup","img":"assets/img/degup.png"}
      ],
    },
    "Kata sapaan": {
      "sebutan": [
        {"ind":"bapak","ter":"bapak","img":"assets/img/bapak.png"},
        {"ind":"ibu","ter":"ibu","img":"assets/img/ibu.png"},
        {"ind":"tuan","ter":"tuan","img":"assets/img/tuan.png"},
        {"ind":"mbak","ter":"mbak","img":"assets/img/mbak.png"},
        {"ind":"mas","ter":"mas","img":"assets/img/mas.png"},
        {"ind":"saudari (perempuan)","ter":"mbak","img":"assets/img/saudari_perempuan.png"},
        {"ind":"adik (laki-laki)","ter":"mas","img":"assets/img/adik_laki.png"},
        {"ind":"adik (perempuan)","ter":"mbak","img":"assets/img/adik_perempuan.png"}
      ],
      "Sapaan Biasa": [
        {"ind":"halo","ter":"halo","img":"assets/img/hallo.png"},
        {"ind":"hai","ter":"hai","img":"assets/img/hai.png"},
        {"ind":"selamat pagi","ter":"selamat enjing","img":"assets/img/selamat_pagi.png"},
        {"ind":"selamat siang","ter":"selamat awan","img":"assets/img/selamat_siang.png"},
        {"ind":"selamat sore","ter":"selamat sonten","img":"assets/img/selamat_sore.png"},
        {"ind":"selamat malam","ter":"selamat dalu","img":"assets/img/selamat_malam.png"},
        {"ind":"apa kabar?","ter":"piye kabarmu?","img":"assets/img/apa_kabar.png"},
        {"ind":"baik","ter":"apik","img":"assets/img/baik.png"},
        {"ind":"terima kasih","ter":"matur nuwun","img":"assets/img/terima_kasih.png"},
        {"ind":"sama-sama","ter":"sama-sama","img":"assets/img/sama_sama.png"},
        {"ind":"maaf","ter":"ngapunten","img":"assets/img/maaf.png"},
        {"ind":"permisi","ter":"permisi","img":"assets/img/permisi.png"},
        {"ind":"selamat tinggal","ter":"selamat tinggal","img":"assets/img/selamat_tinggal.png"},
        {"ind":"sampai jumpa","ter":"ketemu maneh","img":"assets/img/sampai_jumpa.png"},
        {"ind":"sampai nanti","ter":"ketemu mengko","img":"assets/img/sampai_nanti.png"},
        {"ind":"sampai besok","ter":"ketemu sesuk","img":"assets/img/sampai_besok.png"},
        {"ind":"selamat jalan","ter":"selamat dalu","img":"assets/img/selamat_jalan.png"},
        {"ind":"selamat beristirahat","ter":"selamat istirahat","img":"assets/img/selamat_beristirahat.png"},
        {"ind":"selamat bekerja","ter":"selamat makarya","img":"assets/img/selamat_bekerja.png"},
        {"ind":"selamat belajar","ter":"selamat sinau","img":"assets/img/selamat_belajar.png"},
        {"ind":"selamat makan","ter":"selamat dhahar","img":"assets/img/selamat_makan.png"},
        {"ind":"selamat ulang tahun","ter":"selamat ulang tahun","img":"assets/img/selamat_ulang_tahun.png"},
        {"ind":"selamat hari raya","ter":"selamat lebaran","img":"assets/img/selamat_hari_raya.png"},
        {"ind":"selamat natal","ter":"selamat natal","img":"assets/img/selamat_natal.png"},
        {"ind":"selamat tahun baru","ter":"selamat warsa anyar","img":"assets/img/selamat_tahun_baru.png"},
        {"ind":"selamat idul fitri","ter":"selamat idul fitri","img":"assets/img/selamat_idul_fitri.png"},
        {"ind":"selamat idul adha","ter":"selamat idul adha","img":"assets/img/selamat_idul_adha.png"}
      ],
    },
    "Kata Bantu": {
      "Kata Kerja Bantu": [
        {"ind":"coba","ter":"coba","img":"assets/img/coba.png"},
        {"ind":"sanggup","ter":"sanggup","img":"assets/img/sanggup.png"},
        {"ind":"sedang","ter":"sedang","img":"assets/img/sedang.png"},
        {"ind":"akan","ter":"bakal","img":"assets/img/akan.png"},
        {"ind":"telah","ter":"wis","img":"assets/img/telah.png"},
        {"ind":"sudah","ter":"sudah","img":"assets/img/sudah.png"},
        {"ind":"belum","ter":"durung","img":"assets/img/belum.png"},
        {"ind":"ingin","ter":"arep","img":"assets/img/ingin.png"},
        {"ind":"mesti","ter":"mesti","img":"assets/img/mesti.png"},
        {"ind":"harus","ter":"kudu","img":"assets/img/harus.png"},
        {"ind":"boleh","ter":"boleh","img":"assets/img/boleh.png"},
        {"ind":"mau","ter":"arep","img":"assets/img/mau.png"},
        {"ind":"perlu","ter":"perlu","img":"assets/img/perlu.png"},
        {"ind":"juga","ter":"uga","img":"assets/img/juga.png"},
        {"ind":"pun","ter":"uga","img":"assets/img/pun.png"},
        {"ind":"saja","ter":"wae","img":"assets/img/saja.png"},
        {"ind":"hanya","ter":"mung","img":"assets/img/hanya.png"},
        {"ind":"malah","ter":"malah","img":"assets/img/malah.png"},
        {"ind":"justru","ter":"justru","img":"assets/img/justru.png"},
        {"ind":"bahkan","ter":"malah","img":"assets/img/bahkan.png"},
        {"ind":"lagi","ter":"maneh","img":"assets/img/lagi.png"},
        {"ind":"terus","ter":"terus","img":"assets/img/terus.png"},
        {"ind":"tetap","ter":"tetep","img":"assets/img/tetap.png"},
        {"ind":"sampai","ter":"nganti","img":"assets/img/sampai.png"},
        {"ind":"punya","ter":"duwe","img":"assets/img/punya.png"},
        {"ind":"ada","ter":"ada","img":"assets/img/ada.png"},
        {"ind":"tidak ada","ter":"ora ana","img":"assets/img/tidak_ada.png"},
        {"ind":"dapat","ter":"dapat","img":"assets/img/dapat.png"},
        {"ind":"ingin","ter":"ingin","img":"assets/img/ingin.png"},
        {"ind":"menginginkan","ter":"menginginkan","img":"assets/img/menginginkan.png"},
        {"ind":"suka","ter":"seneng","img":"assets/img/suka.png"},
        {"ind":"benci","ter":"mbenci","img":"assets/img/benci.png"},
        {"ind":"tahu","ter":"ngerti","img":"assets/img/tahu.png"},
        {"ind":"mengerti","ter":"ngerti","img":"assets/img/mengerti.png"},
        {"ind":"percaya","ter":"percaya","img":"assets/img/percaya.png"},
        {"ind":"ingat","ter":"eling","img":"assets/img/ingat.png"},
        {"ind":"lupa","ter":"lali","img":"assets/img/lupa.png"},
        {"ind":"ingat-ingat","ter":"eling-eling","img":"assets/img/ingat_ingat.png"},
        {"ind":"cinta","ter":"tresna","img":"assets/img/cinta.png"},
        {"ind":"sayang","ter":"tresna","img":"assets/img/sayang.png"},
        {"ind":"pernah","ter":"tau","img":"assets/img/pernah.png"},
        {"ind":"bisa","ter":"bisa","img":"assets/img/bisa.png"},
        {"ind":"mampu","ter":"sanggup","img":"assets/img/mampu.png"},
        {"ind":"sanggup","ter":"sanggup","img":"assets/img/sanggup.png"},
        {"ind":"berani","ter":"berani","img":"assets/img/berani.png"},
        {"ind":"berada","ter":"berada","img":"assets/img/berada.png"}
      ]
    }
  };

  // ======================
  // Map kata/frasa
  // ======================
  const mapIdToTt=new Map(), mapTtToId=new Map();
  Object.entries(DICT).forEach(([cat,themes])=>{
    Object.entries(themes).forEach(([theme,arr])=>{
      (arr||[]).forEach(it=>{
        if(it.ind&&it.ter){
          mapIdToTt.set(it.ind.toLowerCase(),it.ter);
          mapTtToId.set(it.ter.toLowerCase(),it.ind);
        }
      });
    });
  });

  // ======================
  // Translasi multi kata/frasa
  // ======================
  function translateWithMap(text, dir){
    if(!text) return "";
    const dict = dir === 'id-to-tt' ? mapIdToTt : mapTtToId;
    const tokens = text.match(/\w+|[^\w\s]/g) || [];
    let out = [], i=0;

    while(i < tokens.length){
      let match=null, matchLen=0;
      for(let len=Math.min(10,tokens.length-i); len>0; len--){
        const phrase=tokens.slice(i,i+len).join(" ").toLowerCase();
        if(dict.has(phrase)){
          match=dict.get(phrase); matchLen=len; break;
        }
      }
      if(match){
        if(i===0 && /^[A-Z]/.test(text.trim())){
          match = match.charAt(0).toUpperCase() + match.slice(1);
        }
        out.push(match);
        i+=matchLen;
      }else{
        out.push(tokens[i]); i++;
      }
    }
    return out.join(" ");
  }

  // ======================
  // GPT API
  // ======================
  async function callOpenAIcorrect(text){
    const system='Kamu adalah korektor tata bahasa Indonesia. Jawab hanya kalimat hasil perbaikan, tanpa tambahan kata lain.';
    const body={
      model:(typeof OPENAI_MODEL!=='undefined'?OPENAI_MODEL:'gpt-4o-mini'),
      messages:[
        {role:'system',content:system},
        {role:'user',content:`Perbaiki kalimat ini: "${text}"`}
      ],
      temperature:0
    };
    const resp=await fetch((typeof API_PROXY_URL!=='undefined'?API_PROXY_URL:'/api/correct'),{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(body)
    });
    if(!resp.ok) throw new Error('Proxy '+resp.status);
    const j=await resp.json();
    return j?.choices?.[0]?.message?.content?.trim()||text;
  }

  // ======================
  // Render kategori & card (dengan suara klik / dblklik)
  // ======================
  function renderCategory(category, theme){
    const cont = $('categoryContainer');
    cont.innerHTML='';
    if(!category || !theme) return;

    const list = (DICT[category] && DICT[category][theme]) || [];
    list.forEach(it=>{
      const card=document.createElement('div');
      card.className='card';
      card.style.width='10rem';
      card.innerHTML=`
        ${it.img?`<img src="${it.img}" class="card-img-top" alt="${it.ind}">`:''}
        <div class="card-body text-center">
          <h5 class="card-title">${it.ind}</h5>
          <p class="card-text"><em>${it.ter}</em></p>
        </div>`;

      let clickTimer=null;

      card.addEventListener('click', ()=>{
        if(clickTimer){ clearTimeout(clickTimer); clickTimer=null; }
        clickTimer=setTimeout(()=>{
          // suara Indonesia
          const u = new SpeechSynthesisUtterance(it.ind);
          u.lang = "id-ID";
          speechSynthesis.cancel();
          speechSynthesis.speak(u);
          clickTimer=null;
        }, 250); // tunggu 250ms, kalau tidak ada klik kedua → jalan
      });

      card.addEventListener('dblclick', ()=>{
        if(clickTimer){ clearTimeout(clickTimer); clickTimer=null; }
        // suara Ternate
        const u = new SpeechSynthesisUtterance(it.ter);
        u.lang = "id-ID"; // belum ada dukungan khusus Ternate
        speechSynthesis.cancel();
        speechSynthesis.speak(u);
      });

      cont.appendChild(card);
    });
  }


  // ======================
  // Pencarian kata
  // ======================
  function renderFilter(query){
    const cont=$('categoryContainer');
    cont.innerHTML='';
    query=query.toLowerCase();
    Object.entries(DICT).forEach(([cat,themes])=>{
      Object.entries(themes).forEach(([theme,list])=>{
        list.forEach(it=>{
          if(it.ind.toLowerCase().includes(query) || it.ter.toLowerCase().includes(query)){
            const card=document.createElement('div');
            card.className='card';
            card.style.width='10rem';
            card.innerHTML=`
              ${it.img?`<img src="${it.img}" class="card-img-top" alt="${it.ind}">`:''}
              <div class="card-body">
                <h5 class="card-title">${it.ind}</h5>
                <p class="card-text"><em>${it.ter}</em></p>
              </div>`;
            cont.appendChild(card);
          }
        });
      });
    });
  }

  // ======================
  // Dropdown kategori & tema
  // ======================
  function populateDropdown(){
    const cat=$('categorySelect');
    cat.innerHTML='';
    Object.keys(DICT).forEach(c=>{
      const o=document.createElement('option');
      o.value=c;o.textContent=c;
      cat.appendChild(o);
    });

    const theme=$('themeSelect');
    theme.innerHTML='';
    const firstCat = Object.keys(DICT)[0];
    cat.value = firstCat;
    const firstTheme = Object.keys(DICT[firstCat])[0];
    Object.keys(DICT[firstCat]).forEach(t=>{
      const o=document.createElement('option');
      o.value=t;o.textContent=t;
      theme.appendChild(o);
    });
    theme.value = firstTheme;
    renderCategory(firstCat, firstTheme);

    cat.addEventListener('change',()=>{
      theme.innerHTML='';
      if(DICT[cat.value]){
        Object.keys(DICT[cat.value]).forEach(t=>{
          const o=document.createElement('option');
          o.value=t;o.textContent=t;
          theme.appendChild(o);
        });
        theme.value=Object.keys(DICT[cat.value])[0];
        renderCategory(cat.value, theme.value);
      }
    });
    theme.addEventListener('change',()=>{
      renderCategory(cat.value, theme.value);
    });
  }

  // ======================
  // Dropdown filter tabel
  // ======================
  function populateAllCategorySelect(){
    const sel=$('allCategorySelect');
    sel.innerHTML='<option value="all">Semua Kategori</option>';
    Object.keys(DICT).forEach(c=>{
      const o=document.createElement('option');
      o.value=c;o.textContent=c;
      sel.appendChild(o);
    });
    sel.addEventListener('change',()=>renderTable(sel.value));
  }

  // ======================
  // Render tabel kamus
  // ======================
  function renderTable(filterCat="all"){
    const tb=$('tableBody');
    if(!tb) return;
    tb.innerHTML='';
    Object.entries(DICT).forEach(([cat,themes])=>{
      if(filterCat!=="all" && filterCat!==cat) return;
      Object.entries(themes).forEach(([theme,list])=>{
        list.forEach(it=>{
          const tr=document.createElement('tr');
          tr.innerHTML=`
            <td>${cat}</td>
            <td>${theme}</td>
            <td>${it.ind}</td>
            <td>${it.ter}</td>`;
          tb.appendChild(tr);
        });
      });
    });
  }

  // ======================
  // Init UI
  // ======================
  function initUI(){
    populateDropdown();
    populateAllCategorySelect();
    renderTable();

    $('translateBtn').addEventListener('click', async ()=>{
      const raw=$('inputText').value.trim();
      if(!raw) return;
      $('log').textContent='Memproses...';

      const dir=$('direction').value||'id-to-tt';
      let source=raw;

      if($('useAI').checked){
        try{
          const corrected=await callOpenAIcorrect(raw);
          source=corrected;
          $('log').textContent=`Kalimat dikoreksi: ${corrected}`;
        }catch(e){
          $('log').textContent='AI gagal: '+e.message+' → fallback ke kamus';
        }
      }else{
        $('log').textContent='Mode tanpa AI (langsung kamus)';
      }

      $('outputText').value=translateWithMap(source, dir);
    });

    $('translateSimpleBtn').addEventListener('click', ()=>{
      const raw=$('inputText').value.trim();
      const dir=$('direction').value||'id-to-tt';
      $('outputText').value=translateWithMap(raw, dir);
    });

    $('clearBtn').addEventListener('click', ()=>{
      $('inputText').value='';
      $('outputText').value='';
      $('log').textContent='';
    });

    $('swapBtn').addEventListener('click', ()=>{
      const sel=$('direction');
      sel.value= sel.value==='id-to-tt'?'tt-to-id':'id-to-tt';
    });

    $('copyBtn').addEventListener('click', async ()=>{
      try{
        await navigator.clipboard.writeText($('outputText').value||'');
        $('copyBtn').textContent='✓ Tersalin';
        setTimeout(()=>{$('copyBtn').textContent='📋 Salin';},1200);
      }catch{alert('Gagal salin');}
    });

    $('speakBtn').addEventListener('click', ()=>{
      const t=$('outputText').value||'';
      const u=new SpeechSynthesisUtterance(t);
      u.lang='id-ID';
      speechSynthesis.speak(u);
    });

    $('btnSearch').addEventListener('click', ()=>{
      const q=$('searchWord').value.trim().toLowerCase();
      if(q) renderFilter(q);
      else renderCategory($('categorySelect').value, $('themeSelect').value);
    });
    $('searchWord').addEventListener('input', ()=>{
      const q=$('searchWord').value.trim().toLowerCase();
      if(q) renderFilter(q);
      else renderCategory($('categorySelect').value, $('themeSelect').value);
    });
  }

  document.addEventListener('DOMContentLoaded', initUI);
})();
