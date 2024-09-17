let first_Con = document.getElementById("first-con");
let data_Inupt = document.getElementById("data-input");
let lang_Select = document.getElementById("lang-select");
let lang_Selectt = document.getElementById("lang-selectt");
let first_Search_Btn = document.getElementById("first-search-btn");
// last container
let last_Con = document.getElementById("last-con");
let manual_Btn = document.getElementById("manual-btn");
let auto_Btn = document.getElementById("auto-btn");
let length_Output = document.getElementById("length-output");
let manual_Btn_mob = document.getElementById("manual-btn-mob");
let auto_Btn_mob = document.getElementById("auto-btn-mob");
let length_Output_mob = document.getElementById("length-output-mob");
let delete_Btn = document.getElementById("delete-btn");
let search_Btn = document.getElementById("search-btn");
let search_Input = document.getElementById("search-input");
let data_Output = document.getElementById("data-output");
let last_Search_Btn = document.getElementById("last-search-btn");

if (search_Input.value == "") {
  length_Output.innerHTML = 0;
  length_Output_mob.innerHTML = 0;
}

first_Search_Btn.addEventListener("click", function () {
  if (data_Inupt.value.trim().length > 0) {
    data_Output.innerHTML = data_Inupt.value;
    first_Con.classList.remove("flex");
    first_Con.classList.add("hidden");
    last_Con.classList.remove("hidden");
    last_Con.classList.add("flex");
  } else {
    alert("متن را وارد کنید");
  }
});

last_Search_Btn.addEventListener("click", function () {
  search_Input.value = "";
  data_Inupt.value = "";
  first_Con.classList.add("flex");
  first_Con.classList.remove("hidden");
  last_Con.classList.add("hidden");
  last_Con.classList.remove("flex");
});

// تابع جستجو
function performSearch(query) {
  let replace_data = new RegExp(query, "ig");
  data_Output.innerHTML = data_Output.innerText.replace(
    replace_data,
    `<span id="sp" class="bg-yellow-300"">${query}</span>`
  );
  let sp = document.getElementsByTagName("span");
  length_Output.innerHTML = sp.length;
  length_Output_mob.innerHTML = sp.length;
  if (search_Input.value == "") {
    length_Output.innerHTML = 0;
    length_Output_mob.innerHTML = 0;
  }
}
//برای ایونت ها که تابع رو نمیشه داخلش مستقیم صدا کرد
function handleKeyUp() {
  performSearch(search_Input.value);
}

manual_Btn.disabled = true;
manual_Btn_mob.disabled = true;

//دکمه سرچ
search_Btn.addEventListener("click", handleKeyUp);

//حالت سرچ دستی
manual_Btn.addEventListener("click", function () {
  manual_Btn.disabled = true;
  manual_Btn_mob.disabled = true;
  auto_Btn_mob.disabled = false;
  auto_Btn.disabled = false;
  search_Btn.disabled = false;

  search_Input.removeEventListener("keyup", handleKeyUp);
});

manual_Btn_mob.addEventListener("click", function () {
  manual_Btn.disabled = true;
  manual_Btn_mob.disabled = true;
  auto_Btn_mob.disabled = false;
  auto_Btn.disabled = false;
  search_Btn.disabled = false;

  search_Input.removeEventListener("keyup", handleKeyUp);
});

//حالت سرچ اتوماتیک
auto_Btn.addEventListener("click", function () {
  manual_Btn.disabled = false;
  manual_Btn_mob.disabled = false;
  auto_Btn.disabled = true;
  auto_Btn_mob.disabled = true;
  search_Btn.disabled = true;

  search_Input.addEventListener("keyup", handleKeyUp);
});

auto_Btn_mob.addEventListener("click", function () {
  manual_Btn.disabled = false;
  manual_Btn_mob.disabled = false;
  auto_Btn.disabled = true;
  auto_Btn_mob.disabled = true;
  search_Btn.disabled = true;

  search_Input.addEventListener("keyup", handleKeyUp);
});

//دکمه پاک کردن

delete_Btn.addEventListener("click", function () {
  search_Input.value = "";
  data_Output.innerHTML = data_Output.textContent;
  length_Output.innerHTML = 0;
  length_Output_mob.innerHTML = 0;
});

lang_Select.addEventListener("change", function () {
  const selectedValue = this.value;
  if (selectedValue) {
    window.location.href = selectedValue;
  }
});
lang_Selectt.addEventListener("change", function () {
  const selectedValue = this.value;
  if (selectedValue) {
    window.location.href = selectedValue;
  }
});
