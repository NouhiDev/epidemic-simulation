window.alert("I highly recommend enabling hardware acceleration and viewing the simulation in fullscreen.");

$(window).on("load", async function () {
  // await delay(2000);
    $(".loader").fadeOut(1000);
    delay(1000).then(() => $(".content").fadeIn(1000));
  });
  
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
  