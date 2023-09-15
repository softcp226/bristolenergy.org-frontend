// let investment_packages;
let selected_package;

const setPackages = (investment_package) => {
  // investment_packages = investment_package;

  investment_package.forEach((package) => {
    const plan = document.createElement("div");
    plan.className = "plan";
    plan.id = "plan";
    const package_name = document.createElement("h3");
    const package_min = document.createElement("p");
    const package_max = document.createElement("p");
    const return_time = document.createElement("p");
    package_name.innerHTML = package.package_name;
    package_min.innerHTML = `Min: $${package.min}`;
    package_max.innerHTML = `Max: $${package.max}`;
    return_time.innerHTML = `${package.percentage}% return after ${package.payment_period}`;

    plan.onclick = () => {
      document.querySelectorAll("#plan").forEach((plan) => {
        plan.className = "plan";
        plan.style.border = "2px solid #110a24";
      });
      plan.className = "selected_plan";
      selected_package = {
        package_name: package.package_name,
        package_min: package.min,
        package_max: package.max,
        percentage: package.percentage,
        payment_period: package.payment_period,
      };
    };
    // const option = document.createElement("option");
    // option.value = package.package_name;
    // option.min = package.min;
    // option.max = package.max;
    // option.innerHTML = `${package.package_name} ($${package.min}-$${package.max})`;
    // document.querySelector("#plan").append(option);
    plan.append(package_name, package_min, package_max, return_time);
    document.querySelector("#plan-container").append(plan);
  });
};

(async () => {
  try {
    const response = await fetch(
      "https://bristolenergy-org-backend.glitch.me/api/investment_packages/fetch",

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
      // alert(result.errMessage);
    } else {
      setPackages(result.message);
    }
  } catch (error) {
    console.log(error);
    // alert(error.message);
  }
})();
