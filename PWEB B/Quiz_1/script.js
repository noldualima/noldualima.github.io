function validate() {
    if (document.forms["form"]["nama"].value == "") {
        alert("Error: Nama Peserta Masih Kosong");
        document.forms["form"]["nama"].focus();
        return false;
    }
    if (document.forms["form"]["ttl"].value == "") {
        alert("Error: Tempat Tanggal Lahir Masih Kosong");
        document.forms["form"]["ttl"].focus();
        return false;
    }
    if (document.forms["form"]["unit"].value == "") {
        alert("Error: Utusan Unit TKA/TPA Masih Kosong");
        document.forms["form"]["unit"].focus();
        return false;
    }
    if (document.forms["form"]["desa"].value == "") {
        alert("Error: Kelurahan/Desa Masih Kosong");
        document.forms["form"]["desa"].focus();
        return false;
    }
    if (document.forms["form"]["telp"].value == "") {
        alert("Error: Nomor Telepon Masih Kosong");
        document.forms["form"]["telp"].focus();
        return false;
    }
    if (document.forms["form"]["jenis-lomba"].selectedIndex == "") {
        alert("Error: Jenis Lomba Masih Kosong");
        document.forms["form"]["jenis-Lomba"].focus();
        return false;
    }
    if (document.forms["form"]["file"].value == "") {
        alert("Error: File Formulir Masih Kosong");
        document.forms["form"]["file"].focus();
        return false;
    }
    return true;
}