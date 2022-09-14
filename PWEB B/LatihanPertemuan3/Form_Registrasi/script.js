function validate() {
    if (document.forms["form"]["nama"].value == "") {
        alert("Error: Nama Masih Kosong");
        document.forms["form"]["nama"].focus();
        return false;
    }
    if (document.forms["form"]["nrp"].value == "") {
        alert("Error: NRP Masih Kosong");
        document.forms["form"]["nrp"].focus();
        return false;
    }
    if (document.forms["form"]["email"].value == "") {
        alert("Error: Email Masih Kosong");
        document.forms["form"]["email"].focus();
        return false;
    }
    if(document.forms["form"]["email"].value.indexOf("@") == -1){
        alert("Pastikan format email yang dimasukkan sudah benar.");
        document.forms["form"]["email"].focus();
        return false;
    }
    if(document.forms["form"]["email"].value.indexOf(".") == -1){
        alert("Pastikan format email yang dimasukkan sudah benar.");
        document.forms["form"]["email"].focus();
        return false;
    }
    if (document.forms["form"]["departemen"].selectedIndex == "") {
        alert("Error: Mata Kuliah Masih Kosong");
        document.forms["form"]["mata-kuliah"].focus();
        return false;
    }
    if (document.forms["form"]["vaksin"].selectedIndex == "" ) {
        alert("Error: Dosen Masih Kosong");
        document.forms["form"]["dosen"].focus();
        return false;
    }
    return true;
}

function ndosen(s1,s2){
	var s1 = document.getElementById(s1);
	var s2 = document.getElementById(s2);
	s2.innerHTML = "";
	if(s1.value == "GRAFKOM"){
		var optionArray = ["|-Pilih Dosen-","siska|Bu Siska","darlis|Pak Darlis","anny|Bu Anny"];
	} else if(s1.value == "JARKOM"){
		var optionArray = ["|-Pilih Dosen-","onggo|Pak Onggo","bagus|Pak Bagus","ary|Pak Ary","hudan|Pak Hudan"];
	} else if(s1.value == "KK"){
        var optionArray = ["|-Pilih Dosen-","chastine|Bu Chastine","dini|Bu Dini","anny|Bu Anny","nanik|Bu Nanik","darlis|Pak Darlis"];
    } else if(s1.value == "MPPL"){
        var optionArray = ["|-Pilih Dosen-","sarwo|Bu Sarwo","fajar|Pak Fajar","ratih|Bu Ratih","siti|Bu Siti"];
    } else if(s1.value == "PPL"){
        var optionArray = ["|-Pilih Dosen-","licha|Bu Licha","ratih|Bu Ratih","yuhana|Bu Yuhana"];
    } else if(s1.value == "PWEB"){
		var optionArray = ["|-Pilih Dosen-","fajar|Pak Fajar","irfan|Pak Irfan","ridho|Pak Ridho"];
	}
	for(var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}