AOS.init();

        /**INICIO MENU RESPONSIVO */
        let menu = document.getElementById('lis_menu')

        function visibilidadeMenu(){
            if (menu.style.display == 'block') {
                menu.style.display = 'none'
            } else {
                menu.style.display = 'block'
            }
        }

        /**FIM MENU RESPONSIVO */


        /**ANIMAÇÃO PARA SLID*/

       let quant_slid = document.querySelectorAll('.slid')

       

       let inicio = 0
       let tamanho_max = quant_slid.length

       let back = document.getElementById('back')

       let next = document.getElementById('next')

       back.onclick = () =>{
            let ativoRemove = document.querySelector('.ativo')

            ativoRemove.classList.remove('ativo')

            inicio = (inicio <= 0) ? tamanho_max - 1 : inicio - 1

            quant_slid[inicio].classList.add('ativo')
            
       }


        next.onclick = () => {
            let ativoRemove = document.querySelector('.ativo')

            ativoRemove.classList.remove('ativo')

            inicio = (inicio >= tamanho_max - 1) ? 0 : inicio + 1

            quant_slid[inicio].classList.add('ativo')
        }


