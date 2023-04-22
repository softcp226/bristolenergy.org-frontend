const btc_icon =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/225px-Bitcoin.svg.png";
const ethereum_icon =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmyEwFnrqqHY4c5y0fIJVZhW7lpBzoNXGY2Q&usqp=CAU";
const usdt_icon =
  "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Tether-USDT-icon.png";
const perfect_money_icon =
  "https://play-lh.googleusercontent.com/A0-25O4FaUEAWFUAc6a4UQm6Qz3kuKzjTp93jvkBYF3Yv3UxcVx2TfHupfOUQqHcuqj2=w240-h480-rw";
const payeer_icon =
  "https://e7.pngegg.com/pngimages/983/55/png-clipart-business-computer-software-google-play-business-blue-text-thumbnail.png";
const bnb_icon = "https://cdn-icons-png.flaticon.com/512/7403/7403652.png";

const select_credit_icon = (data) => {
  console.log("data", data);

  switch (data.payment_method) {
    case "BITCOIN":
      return btc_icon;
      break;

    case "ETHEREUM":
      return ethereum_icon;
      break;

    case "USDT(TRC20)":
      return usdt_icon;
      break;

    case "PERFECT MONEY":
      return perfect_money_icon;
      break;

    case "PAYEER":
      return payeer_icon;
      break;

    case "BNB":
      return bnb_icon;
      break;

    default:
      return btc_icon;
      break;
  }
};

const select_debit_icon = (data) => {
  console.log("data", data);

  switch (data.withdrawal_method) {
    case "BITCOIN":
      return btc_icon;
      break;

    case "ETHEREUM":
      return ethereum_icon;
      break;

    case "USDT(TRC20)":
      return usdt_icon;
      break;

    case "PERFECT MONEY":
      return perfect_money_icon;
      break;

    case "PAYEER":
      return payeer_icon;
      break;

    case "BNB":
      return bnb_icon;
      break;

    default:
      return btc_icon;
      break;
  }
};

const create_credit_element = (data) => {
  //   const container_col_sm = document.createElement("div");
  //   const featured_creator_box_div = document.createElement("div");
  //   const featured_creator_img_div = document.createElement("div");
  //   const featured_creator_img_a = document.createElement("a");
  //   const featured_creator_img_a_img = document.createElement("img");
  //   const featured_creator_name_div = document.createElement("div");
  //   const featured_creator_name_a = document.createElement("a");
  //   const featured_creator_name_span = document.createElement("span");

  //   container_col_sm.className = "col-sm-6 col-md-6 d-flex col-lg-4 col-xl-3";
  //   featured_creator_box_div.className =
  //     "featured-creator-box wow fadeInUp delay-1";
  //   featured_creator_img_div.className = "featured-creator-img";
  //   featured_creator_name_div.className = "featured-creator-name";
  //   featured_creator_name_a.className = "box-title";
  //   featured_creator_name_span.className = "bid-price";

  //   featured_creator_img_a_img.src =select_credit_icon(
  //     data.deposit_request,
  //   );
  // featured_creator_name_a.innerHTML = data.user
  //   ? data.user.username
  //   : "UNAVAILABLE...";
  //   featured_creator_name_span.innerHTML = data.credit;

  //   // featured_creator_img_a.append(featured_creator_img_a_img);
  //   // featured_creator_box_div.append(featured_creator_img_div);
  //   featured_creator_img_a.append(featured_creator_img_a_img);
  //   featured_creator_img_div.append(featured_creator_img_a);

  //   featured_creator_name_div.append(
  //     featured_creator_name_a,
  //     featured_creator_name_span,
  //   );

  //   featured_creator_box_div.append(
  //     featured_creator_img_div,
  //     featured_creator_name_div,
  //   );
  //   container_col_sm.append(featured_creator_box_div);
  //   document.querySelector("#latest_deposit").append(container_col_sm);

  const container_tr = document.createElement("tr");
  const img_container_td = document.createElement("td");
  const td_img = document.createElement("img");
  const amount_td = document.createElement("td");
  const amount_td_icon = document.createElement("i");
  const name_td = document.createElement("td");

  img_container_td.className = "menutxt";
  img_container_td.append(td_img);
  td_img.src = select_credit_icon(data.deposit_request);
  td_img.style.width = "22px";
  amount_td.className = "menutxt up";
  amount_td.append(amount_td_icon, data.credit);
  amount_td_icon.style.color = "#43c443";
  amount_td_icon.className = "fa fa-sort-up";
  name_td.className = "menutxt";
  const hr = document.createElement("hr");
  name_td.innerHTML = data.user ? data.user.username : "UNAVAILABLE...";
  container_tr.append(img_container_td, amount_td, name_td);
  document.querySelector("#latest_deposit > tbody").append(container_tr);

  //   <tr>

  //                                                 <td class=menutxt><img src="images/1006.gif" style="width: 22px;"></td>

  //                                                 <td class="menutxt up"><i class="fa fa-sort-up"
  //                                                         style="color: #43c443 !important;"></i> $10600.00</td>

  //                                                 <td class=menutxt>Geronimo</td>

  //                                                 </td>

  //                                             </tr>
};

const create_debit_element = (data) => {
  const container_tr = document.createElement("tr");
  const img_container_td = document.createElement("td");
  const td_img = document.createElement("img");
  const amount_td = document.createElement("td");
  const amount_td_icon = document.createElement("i");
  const name_td = document.createElement("td");

  img_container_td.className = "menutxt";
  img_container_td.append(td_img);
  td_img.src = select_debit_icon(data.withdrawal_request);
  td_img.style.width = "22px";
  amount_td.className = "menutxt down";
  amount_td.append(amount_td_icon, data.debit);
  amount_td_icon.style.color = "#f42c1b";
  amount_td_icon.className = "fa fa-sort-down";
  name_td.className = "menutxt";
  const hr = document.createElement("hr");
  name_td.innerHTML = data.user ? data.user.username : "UNAVAILABLE...";
  container_tr.append(img_container_td, amount_td, name_td);
  document.querySelector("#latest_withdrawal > tbody").append(container_tr);

  // const container_col_sm = document.createElement("div");
  // const featured_creator_box_div = document.createElement("div");
  // const featured_creator_img_div = document.createElement("div");
  // const featured_creator_img_a = document.createElement("a");
  // const featured_creator_img_a_img = document.createElement("img");
  // const featured_creator_name_div = document.createElement("div");
  // const featured_creator_name_a = document.createElement("a");
  // const featured_creator_name_span = document.createElement("span");

  // container_col_sm.className = "col-sm-6 col-md-6 d-flex col-lg-4 col-xl-3";
  // featured_creator_box_div.className =
  //   "featured-creator-box wow fadeInUp delay-1";
  // featured_creator_img_div.className = "featured-creator-img";

  // featured_creator_name_div.className = "featured-creator-name";
  // featured_creator_name_a.className = "box-title";
  // featured_creator_name_span.className = "bid-price";

  // featured_creator_img_a_img.src = select_debit_icon(data.withdrawal_request);
  // featured_creator_name_a.innerHTML = data.user
  //   ? data.user.username
  //   : "UNAVAILABLE...";
  // featured_creator_name_span.innerHTML = data.debit;

  // //  featured_creator_img_a_img

  // // featured_creator_img_a.append(featured_creator_img_a_img);
  // // featured_creator_box_div.append(featured_creator_img_div);
  // featured_creator_img_a.append(featured_creator_img_a_img);
  // featured_creator_img_div.append(featured_creator_img_a);

  // featured_creator_name_div.append(
  //   featured_creator_name_a,
  //   featured_creator_name_span,
  // );

  // featured_creator_box_div.append(
  //   featured_creator_img_div,
  //   featured_creator_name_div,
  // );
  // container_col_sm.append(featured_creator_box_div);
  // document.querySelector("#latest_withdrawal").append(container_col_sm);
};

const fetch_first_10_deposits = async () => {
  try {
    const response = await fetch(
      // "http://localhost:5000/last_10_withdrawals&deposit/last_10_deposits",
      //   "https://bristolenergy-org-backend.glitch.me/last_10_withdrawals&deposit/last_10_deposits",
      "https://bristolenergy-org-backend.glitch.me/last_10_withdrawals&deposit/last_10_deposits",
    );
    const result = await response.json();
    console.log("result", result);
    if (result.error) {
      alert(result.errMessage);
      console.log(result);
    } else {
      //   setText(result.message);
      result.message.forEach((element) => {
        create_credit_element(element);
      });
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
fetch_first_10_deposits();

const fetch_first_10_withdrawals = async () => {
  try {
    const response = await fetch(
      // "https://bristolenergy-org-backend.glitch.me/last_10_withdrawals&deposit/last_10_withdrawals",
      "https://bristolenergy-org-backend.glitch.me/last_10_withdrawals&deposit/last_10_withdrawals",
      // "http://localhost:5000/last_10_withdrawals&deposit/last_10_withdrawals",
    );
    const result = await response.json();
    console.log("result", result);
    if (result.error) {
      alert(result.errMessage);
      console.log(result);
    } else {
      //   setText(result.message);

      result.message.forEach((element) => {
        create_debit_element(element);
      });
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
fetch_first_10_withdrawals();
