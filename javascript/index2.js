const getCookie = (cname) => {
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

const setText = (investment_package) => {
  investment_package.forEach((investment_package) => {
    //   <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
    //                                 <div class="hvr-grow">
    //                                     <div class="planbg1">
    //                                         <div class="plan-top">
    //                                             <img src="images/plan1.png" class="">
    //                                             <h2>Economy plan</h2>
    //                                         </div>
    //                                         <div class="plan-mid">
    //                                             <h2>$50 - $999</h2>
    //                                             <p>15% after 24hrs</p>
    //                                         </div>
    //                                         <div class="plan-details">
    //                                             <p>Fast Withdrawals</p>
    //                                             <p>5% Referral Bonus</p>
    //                                             <p style="border-bottom:none;">Principal Included</p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>

    const col_div_container = document.createElement("div");
    const hvr_grow_div = document.createElement("div");
    const planbg1_div = document.createElement("div");
    const plan_top_div = document.createElement("div");
    const plan_img = document.createElement("img");
    const plan_name = document.createElement("h2");
    const plan_mid_div = document.createElement("div");
    const plan_mid_div_h2 = document.createElement("h2");
    const plan_mid_div_p = document.createElement("p");
    const plan_details_div = document.createElement("div");
    const plan_details_w_p = document.createElement("p");
    const plan_details_r_p = document.createElement("p");
    const plan_details_p_p = document.createElement("p");

    col_div_container.className = "col-lg-3 col-md-4 col-sm-12 col-xs-12";
    hvr_grow_div.className = "hvr-grow";
    planbg1_div.className = "planbg1";
    plan_top_div.className = "plan-top";
    plan_details_div.className = "plan-details";

    planbg1_div.append(plan_top_div, plan_mid_div,plan_details_div);
    plan_top_div.append(plan_img, plan_name);
    plan_name.innerHTML = investment_package.package_name;

    plan_mid_div.append(plan_mid_div_h2, plan_mid_div_p);
    plan_mid_div.className = "plan-mid";
    plan_mid_div_h2.innerHTML = `$${investment_package.min} - $${investment_package.max}`;
    plan_mid_div_p.innerHTML = `${investment_package.percentage}% Return After ${investment_package.payment_period} `;

    plan_details_w_p.innerHTML="Fast withdrawals"
    plan_details_r_p.innerHTML="5% Referral Bonus"
    plan_details_p_p.innerHTML = "Principal Included";
    plan_details_div.append(plan_details_w_p,plan_details_r_p,plan_details_p_p)

    hvr_grow_div.append(planbg1_div);
    col_div_container.append(hvr_grow_div);

    document.querySelector("#pricing_list").append(col_div_container);

    // const plan_container_div = document.createElement("div");
    // const container_div = document.createElement("div");
    // plan_container_div.className = "live-auction-box wow fadeInUp";
    // container_div.style.padding = "22px";
    // const package_name = document.createElement("h1");
    // package_name.innerHTML = investment_package.package_name;
    // const package_ul = document.createElement("ul");
    // const package_min_li = document.createElement("li");
    // const package_max_li = document.createElement("li");
    // const package_return_li = document.createElement("li");
    // const package_return_li_b = document.createElement("b");
    // const package_principal_li = document.createElement("li");
    // const package_instant_li = document.createElement("li");
    // package_return_li_b.style.color = "#fff";
    // package_return_li_b.innerHTML = `${investment_package.percentage}`;
    // package_min_li.innerHTML = `Min: $${investment_package.min}`;
    // package_max_li.innerHTML = `Max: $${investment_package.max}`;
    // package_return_li.append(
    //   `${investment_package.percentage}% Return After ${investment_package.payment_period} `,
    // );
    // package_principal_li.innerHTML = "PRINCIPAL WITHDRAWAL";
    // package_instant_li.innerHTML = "INSTANT WITHDRAWAL";
    // const package_btn = document.createElement("a");
    // package_btn.href = "register.html";
    // package_btn.className = "btn btn-default";
    // package_btn.innerHTML = "Get Started";
    // package_btn.style.margin = "4px";
    // // package_return_li.innerHTML=;
    // package_ul.append(
    //   package_min_li,
    //   package_max_li,
    //   package_return_li,
    //   package_principal_li,
    //   package_instant_li,
    //   package_btn,
    // );
    // plan_container_div.append(container_div);
    // container_div.append(package_name, package_ul);
    // // plan_container_div.className = "owl-item active";
    // // plan_container_div.style.width = "264.8px";
    // // plan_container_div.style.marginRight = "30px";
    // container_div.className = "live-auction-box wow fadeInUp delay-2 animated";
    // container_div.style.visibility = "visible";
    // document.querySelector("#pricing_list").append(plan_container_div);
  });
};

(async () => {
  try {
    const response = await fetch(
      "https://bristolenergy-org-backend.glitch.me/api/investment_packages/fetch",
      //   "https://bristolenergy-org-backend.glitch.me/api/investment_packages/fetch",

      // "http://localhost:5000/api/investment_packages/fetch",

      {
        method: "POST",
        headers: { "content-type": "application/json" },
        // body: JSON.stringify({ token, user }),
      },
    );
    const result = await response.json();
    console.log("result", result);
    if (result.error) {
      alert(result.errMessage);
    } else {
      setText(result.message);
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
})();
