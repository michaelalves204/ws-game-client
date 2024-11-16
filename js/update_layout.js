function addUserToList(name, point) {
  const liText = `<li class="py-3 sm:py-4">
                               <div class="flex items-center">
                                   <div class="flex-1 min-w-0 ms-4">
                                       <p
                                           class="text-sm font-medium text-gray-900 truncate dark:text-white"
                                       >
                                           ${name}
                                       </p>
                                   </div>
                                   <div
                                       class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                                   >
                                       Pontos: ${point}
                                   </div>
                               </div>
                           </li>`;

  const ul = document.getElementById("users_online");
  ul.innerHTML += liText;
}

function addWord(word) {
  const h1 = document.getElementById("word");

  h1.innerHTML += word;
}

function clearUserList() {
  const ul = document.getElementById("users_online");
  ul.innerHTML = "";
}

function clearH1() {
  document.getElementById("word").innerHTML = "";
}
