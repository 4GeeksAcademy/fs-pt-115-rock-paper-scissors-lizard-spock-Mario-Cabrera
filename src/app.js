window.onload = () => {
    let button = '<button class="btn btn-success display-2 fs-3 fw-bold" id="comienzo">Challenge Sheldon</button>';
    document.getElementById("title").innerHTML = button;
    document.getElementById('comienzo').addEventListener("click", () => {
        document.getElementById("title").innerHTML = '<i class="fa-solid fa-hand-back-fist" id="rock"></i> Rock,<i class="fa-solid fa-paper-plane" id="paper"></i> Paper, <i class="fa-solid fa-scissors" id="scissors"></i> Scissors, <i class="fa-solid fa-hand-lizard" id="lizzard"></i> Lizzard, <i class="fa-solid fa-hand-spock" id="spock"></i> Spock'
        document.getElementById("rock").addEventListener("click", () => { executeGame("Rock") });
        document.getElementById("paper").addEventListener("click", () => { executeGame("Paper") })
        document.getElementById("scissors").addEventListener("click", () => { executeGame("Scissors") })
        document.getElementById("lizzard").addEventListener("click", () => { executeGame("Lizzard") })
        document.getElementById("spock").addEventListener("click", () => { executeGame("Spock") })
        document.getElementById("bazinga").innerHTML = '<div class="container text-start"><div class="row"><div class="col-3 pe-0"><div class="border rounded border-primary fw-bold fs-4 mt-2">Player choice: </div><div class="border rounded border-danger fw-bold fs-4 mt-2">Computer choice: </div><div class="border rounded border-warning fw-bold fs-4 mt-2">Score: </div></div><div class="col-2 ps-0"><div class="border rounded border-primary text-end fw-bold fs-4 mt-2" id="player">None</div><div class="border rounded border-danger text-end fw-bold fs-4 mt-2" id="computer">None</div><div class="border rounded border-warning text-end fw-bold fs-4 mt-2" id="score">0</div></div><div class="col-md-3 fs-1 fw-bold text-center" id="result">Select any icon to play</div><div class="col-md-4 ms-auto" id="photo"><img class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fortressofsolitude.co.za%2Fwp-content%2Fuploads%2F2023%2F01%2FSheldon-Cooper-The-Big-Bang-Theory-1140x760.jpeg&f=1&nofb=1&ipt=fcc94848b986f4df66537c8fda356aad2bffc01448262d86073d72e86f628caf"alt=""            width="80%"></div></div></div></div>'
    })
}
let score = 0;
const RPSLS = ["Rock", "Paper", "Scissors", "Lizzard", "Spock"]
const consoleChoice = () => {
    const random = Math.floor(Math.random() * RPSLS.length);
    return RPSLS[random]
}
const executeGame = (UserValue) => {
    const ConsoleValue = consoleChoice();
    if (!RPSLS.includes(UserValue)) {
        console.log(`${UserValue} no es una opción válida`);
    } else {
        if (ConsoleValue === UserValue) {
            console.log(`It's a draw!! We both chose ${UserValue}`);
            document.getElementById("result").innerText = "ITS A DRAW!";
            document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nickiswift.com%2Fimg%2Fgallery%2Fthe-real-life-inspiration-for-the-big-bang-theorys-sheldon-cooper%2Fintro-1570126543.jpg&f=1&nofb=1&ipt=16ec74c2c3184f5bee99cd909127779ddb9f52af73f130ff20884b348ac842be"alt=""width="80%">'
        } else {
            switch (UserValue) {
                case "Rock":
                    if (ConsoleValue === "Scissors" || ConsoleValue === "Lizzard") {
                        console.log(`You win! ${UserValue} crushes ${ConsoleValue}`);
                        score++;
                        document.getElementById('result').innerText = `${UserValue} smashes ${ConsoleValue}`
                        document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F0a3e7b49d308b6f4b7a15f348b78378e%2Ftenor.gif%3Fitemid%3D3556398&f=1&nofb=1&ipt=3ef82c430d27a85e09b0106a9e320b3af69bdebf90c364bdf21a94441385f10c"alt=""width="80%">'
                        return
                    }
                        console.log(`your ${UserValue} lost to my ${ConsoleValue}! Better luck next time. BAZINGA!`);
                        score--;
                        document.getElementById('result').innerText = `Your ${UserValue} lost to my ${ConsoleValue}! Better luck next time. BAZINGA!`
                        document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FYTBsKkXWjcKkw%2Fgiphy.gif&f=1&nofb=1&ipt=c02fb3fdf513637a945fcfd9b5db01bda9ce1eb50d0eaa20be9f5dc91b1cd907"alt=""width="80%">'
                    
                    break;
                case "Paper":
                    if (ConsoleValue === "Rock") {
                        console.log(`You win! ${UserValue} covers ${ConsoleValue}`);
                        score++;
                        document.getElementById('result').innerText = `${UserValue} covers ${ConsoleValue}`
                        document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F0a3e7b49d308b6f4b7a15f348b78378e%2Ftenor.gif%3Fitemid%3D3556398&f=1&nofb=1&ipt=3ef82c430d27a85e09b0106a9e320b3af69bdebf90c364bdf21a94441385f10c"alt=""width="80%">'
                        return
                    }
                    if (ConsoleValue === "Spock") {
                        console.log(`You win! ${UserValue} disproves ${ConsoleValue}`);
                        score++;
                        document.getElementById('result').innerText = `${UserValue} disproves ${ConsoleValue}`
                        document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F0a3e7b49d308b6f4b7a15f348b78378e%2Ftenor.gif%3Fitemid%3D3556398&f=1&nofb=1&ipt=3ef82c430d27a85e09b0106a9e320b3af69bdebf90c364bdf21a94441385f10c"alt=""width="80%">'
                        return
                    } 
                    
                        console.log(`your ${UserValue} lost to my ${ConsoleValue}! Better luck next time. BAZINGA!`);
                        score--;
                        document.getElementById('result').innerText = `Your ${UserValue} lost to my ${ConsoleValue}! Better luck next time. BAZINGA!`
                        document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FYTBsKkXWjcKkw%2Fgiphy.gif&f=1&nofb=1&ipt=c02fb3fdf513637a945fcfd9b5db01bda9ce1eb50d0eaa20be9f5dc91b1cd907"alt=""width="80%">'
                        
                    
                    break;
                case "Scissors":
                    if (ConsoleValue === "Paper") {
                        console.log(`You win! ${UserValue} cuts ${ConsoleValue}`);
                        score++;
                        document.getElementById('result').innerText = `${UserValue} cuts ${ConsoleValue}`
                        document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F0a3e7b49d308b6f4b7a15f348b78378e%2Ftenor.gif%3Fitemid%3D3556398&f=1&nofb=1&ipt=3ef82c430d27a85e09b0106a9e320b3af69bdebf90c364bdf21a94441385f10c"alt=""width="80%">'
                        return
                    }
                    if (ConsoleValue === "Lizzard") {
                        console.log(`You win! ${UserValue} decapitate ${ConsoleValue}`);
                        score++;
                        document.getElementById('result').innerText = `${UserValue} decapitate ${ConsoleValue}`
                        document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F0a3e7b49d308b6f4b7a15f348b78378e%2Ftenor.gif%3Fitemid%3D3556398&f=1&nofb=1&ipt=3ef82c430d27a85e09b0106a9e320b3af69bdebf90c364bdf21a94441385f10c"alt=""width="80%">'
                        return
                    }
                        console.log(`Your ${UserValue} lost to my ${ConsoleValue}! Better luck next time. BAZINGA!`);
                        score--;
                        document.getElementById('result').innerText = `Your ${UserValue} lost to my ${ConsoleValue}! Better luck next time. BAZINGA!`
                        document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FYTBsKkXWjcKkw%2Fgiphy.gif&f=1&nofb=1&ipt=c02fb3fdf513637a945fcfd9b5db01bda9ce1eb50d0eaa20be9f5dc91b1cd907"alt=""width="80%">'

                    break;
                case "Lizzard":
                    if (ConsoleValue === "Paper") {
                        console.log(`You win! ${UserValue} eats ${ConsoleValue}`);
                        score++;
                        document.getElementById('result').innerText = `${UserValue} eats ${ConsoleValue}`
                        document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F0a3e7b49d308b6f4b7a15f348b78378e%2Ftenor.gif%3Fitemid%3D3556398&f=1&nofb=1&ipt=3ef82c430d27a85e09b0106a9e320b3af69bdebf90c364bdf21a94441385f10c"alt=""width="80%">'
                        return
                    }
                     if (ConsoleValue === "Spock") {
                        console.log(`You win! ${UserValue} poisons ${ConsoleValue}`);
                        score++;
                        document.getElementById('result').innerText = `${UserValue} poisons ${ConsoleValue}`
                        document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F0a3e7b49d308b6f4b7a15f348b78378e%2Ftenor.gif%3Fitemid%3D3556398&f=1&nofb=1&ipt=3ef82c430d27a85e09b0106a9e320b3af69bdebf90c364bdf21a94441385f10c"alt=""width="80%">'
                        return
                    }

                    console.log(`Your ${UserValue} lost to my ${ConsoleValue}! Better luck next time. BAZINGA!`);
                    score--;
                    document.getElementById('result').innerText = `Your ${UserValue} lost to my ${ConsoleValue}! Better luck next time. BAZINGA!`
                    document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FYTBsKkXWjcKkw%2Fgiphy.gif&f=1&nofb=1&ipt=c02fb3fdf513637a945fcfd9b5db01bda9ce1eb50d0eaa20be9f5dc91b1cd907"alt=""width="80%">'

                    break;
                case "Spock":
                    if (ConsoleValue === "Scissors") {
                        console.log(`You win! ${UserValue} smashes ${ConsoleValue}`);
                        score++;
                        document.getElementById('result').innerText = `${UserValue} smashes ${ConsoleValue}`
                        document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F0a3e7b49d308b6f4b7a15f348b78378e%2Ftenor.gif%3Fitemid%3D3556398&f=1&nofb=1&ipt=3ef82c430d27a85e09b0106a9e320b3af69bdebf90c364bdf21a94441385f10c"alt=""width="80%">'
                        return
                    }
                    if (ConsoleValue === "Rock") {
                        console.log(`You win! ${UserValue} vaporizes ${ConsoleValue}`);
                        score++;
                        document.getElementById('result').innerText = `${UserValue} vaporizes ${ConsoleValue}`
                        document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F0a3e7b49d308b6f4b7a15f348b78378e%2Ftenor.gif%3Fitemid%3D3556398&f=1&nofb=1&ipt=3ef82c430d27a85e09b0106a9e320b3af69bdebf90c364bdf21a94441385f10c"alt=""width="80%">'
                        return
                    }
                    console.log(`Your ${UserValue} lost to my ${ConsoleValue}! Better luck next time. BAZINGA!`);
                    score--;
                    document.getElementById('result').innerText = `Your ${UserValue} lost to my ${ConsoleValue}! Better luck next time. BAZINGA!`
                    document.getElementById('photo').innerHTML = '<img id="photo" class="rounded object-fit-cover float-end"src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FYTBsKkXWjcKkw%2Fgiphy.gif&f=1&nofb=1&ipt=c02fb3fdf513637a945fcfd9b5db01bda9ce1eb50d0eaa20be9f5dc91b1cd907"alt=""width="80%">'

                    break;

            }
        }
        document.getElementById('player').innerText = UserValue;
        document.getElementById('computer').innerText = ConsoleValue;
        document.getElementById('score').innerText = score
    }
}
