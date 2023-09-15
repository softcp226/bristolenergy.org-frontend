const checkCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  // return "";
  window.location.href = "/login.html";
};

const handle_withdrawal = async (form) => {
  try {
    document.querySelector("#submit").innerHTML = "proccessing...";
    const response = await fetch(
      // "https://bristolenergy-org-backend.glitch.me/api/user/withdraw",
      "http://localhost:5000/api/user/withdraw",

      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      },
    );
    const result = await response.json();
    console.log(result);
    if (result.error) {
      document.querySelector(".errMessage").innerHTML = result.errMessage;
      document.querySelector("#submit").innerHTML = "try again";
      return;
    }
    document.querySelector("#submit").innerHTML = "success";
    window.location.href = `/action/loading.html?${result.message}`;
  } catch (err) {
    document.querySelector(".errMessage").innerHTML = err.message;
    document.querySelector("#submit").innerHTML = "try again";
  }
};

document.querySelector("#submit").onclick = () => {
  let withdrawal_amount = document.querySelector("#amount");
  let withdrawal_method = document.querySelector("#withdrawal-method");
  let wallet = document.querySelector("#wallet");

  if (!withdrawal_amount.value)
    return (withdrawal_amount.style.border = "2px solid red");
  if (!withdrawal_method.value)
    return (withdrawal_method.style.border = "2px solid red");
  if (!wallet.value) return (wallet.style.border = "2px solid red");
  handle_withdrawal({
    token: checkCookie("token"),
    user: checkCookie("user"),
    withdrawal_amount: withdrawal_amount.value,
    withdrawal_method: withdrawal_method.value,
    wallet: wallet.value,
  });
};

document.querySelectorAll("input").forEach((input) => {
  input.onkeyup = () => {
    input.style.border = "2px solid #fff";
    document.querySelector(".errMessage").innerHTML = "";
  };
});

// document.querySelectorAll("select").forEach((select) => {
//   select.onchange = () => {
//     select.style.border = "2px solid #fff";
//   };
// });
document.querySelector("#withdrawal-method").onchange = () => {
  console.log(user_result);
  const withdrawal_method = document.querySelector("#withdrawal-method");
  withdrawal_method.style.border = "2px solid #fff";
  console.log(withdrawal_method.value);
  switch (withdrawal_method.value) {
    case "BITCOIN":
      document.querySelector(
        "#wallet_balance",
      ).innerHTML = `Bitcoin Balance:$${user_result.bitcoin_balance}.0`;
      break;

    case "ETHEREUM":
      document.querySelector(
        "#wallet_balance",
      ).innerHTML = `Ethereum Balance:$${user_result.ethereum_balance}.0`;
      break;

    case "USDT(TRC20)":
      document.querySelector(
        "#wallet_balance",
      ).innerHTML = `USDT(TRC20) Balance:$${user_result.usdt_balance}.0`;
      break;

    case "PERFECT MONEY":
      document.querySelector(
        "#wallet_balance",
      ).innerHTML = `PERFECT MONEY Balance:$${user_result.perfect_money_balance}.0`;
      break;

    case "PAYEER":
      document.querySelector(
        "#wallet_balance",
      ).innerHTML = `PAYEER Balance:$${user_result.payer_balance}.0`;
      break;

    case "BNB":
      document.querySelector(
        "#wallet_balance",
      ).innerHTML = `BNB Balance:$${user_result.bnb_balance}.0`;
      break;

    default:
      document.querySelector(
        "#wallet_balance",
      ).innerHTML = `Final Balance:$${user_result.final_balance}.0`;
      break;
  }
};

// document.querySelector("#wallet_balance").innerHTML = user_result.final_balance;
