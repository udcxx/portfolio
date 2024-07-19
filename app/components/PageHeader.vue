<script setup lang="ts">
    import { onMounted } from "vue";

    const props = defineProps<{ direction: string }>();

    onMounted(() => {
        const callback = (event: Event) => {
            event.preventDefault();
        };

        const button = document.querySelector('.toggle_menu');
        const navi: any= document.querySelector('.navi');
        const naviLists = document.querySelectorAll('.navi li a');

        const nonActive = () => {
            button?.classList.remove('active');
            navi?.classList.remove('active');
        }

        const active = () => {
            button?.classList.add('active');
            navi?.classList.add('active');
        }

        button?.addEventListener('click', () => {
            button?.classList.contains('active') ? nonActive() : active();
        });

        naviLists.forEach((naviList) => {
            naviList?.addEventListener('click', () => {
                if (navi) {
                    navi.style.opacity = 0;

                    nonActive();

                    setTimeout(() => {
                        navi.style.opacity = 1;
                    }, 1100);
                };
            })
        });
    });
</script>

<template>
    <div class="header">
        <div class="header_bar" :class="direction">
            <h1>udcxx.</h1>
            <ul class="navi">
                <li><AtomsLink href="#about" color="black">about</AtomsLink></li>
                <li><AtomsLink href="#creative" color="black">creative</AtomsLink></li>
                <li><AtomsLink href="#activity" color="black">activity</AtomsLink></li>
                <li><AtomsLink href="#history" color="black">history</AtomsLink></li>
            </ul>
            <button class="toggle_menu"><span></span><span></span><span></span></button>
        </div><!-- /header_bar -->
    </div><!-- /header -->
</template>

<style scoped lang="scss">
.header {
    padding-top: 90px;
}
.header_bar {
    width: 98%; max-width: $wrap-max; height: 50px;
    margin: 0 auto;
    padding-left: 2em;
    color: $black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 20px; left: 0; right: 0; z-index: 5;
    transition: transform 0.5s 0s;
    // border: 1px solid rgba(255, 255, 255, 0.25);
    box-sizing: border-box;
    border-radius: 45px;
    box-shadow: 0 4px 30px rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(20px);
    background-color: $white;

    &.down {
        transform: translateY(-50vh);
    }
}

h1 {
    font-weight: 500; font-family: 'Ubuntu';
    @include fontsize(30);
}

ul {
    list-style-type: none;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;

    li {
        height: 50px;
        display: block;
        position: relative;
        text-align: center;
        flex-shrink: 0;
        font-size: 14px;

        &::after {
            content: '｜';
            position: absolute;
            top: 50%; right: -0.5em;
            transform: translateY(-50%)
        }
        &:nth-last-of-type(1)::after {
            content: none;
        }

        a {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 2em;
        }
    }

    @media (max-width: $break) {
        width: 102vw; height: 100vh; height: 100lvh;
        margin: 0 auto;
        padding: 10vh 2rem 0;
        align-content: flex-start;
        flex-wrap: wrap;
        position: absolute;
        top: -20px; left: -2%; z-index: -1;
        transform: translateX(150vw);
        transition: transform 0.5s 0s;
        overflow: hidden;
        background-color: $white;

        &.active {
            transform: translateX(0);
        }

        li {
            width: 100%; 
            line-height: 5em;

            &::after {
                content: '━';
                margin: 0 auto;
                display: block;
                color: $orange;
                position: absolute;
                bottom: 0; left: 0; right: 0;
            }
            &:nth-last-of-type(1)::after {
                content: none;
            }

            a {
                padding: 0;
                display: block;
                line-height: 50px;
            }
        }
    }
}

.toggle_menu {
    display: none;
    @media (max-width: $break) {
        width: 50px; height:50px;
        position: relative;
        cursor: pointer;
        background-color: transparent;
        border: none;
        display: block;
        outline: none;
        padding: 0;
        appearance: none;
    }

    span {
        height: 3px;
        display: inline-block;
        transition: all .4s;
        position: absolute;
        left: 14px;
        border-radius: 2px;
        background: $black;

        &:nth-of-type(1) { width: 45%; top: 15px; }
        &:nth-of-type(2) { width: 35%; top: 23px; }
        &:nth-of-type(3) { width: 20%; top: 31px; }
    }

    &.active {
        span {
            &:nth-of-type(1) {
                width: 30%;
                top: 18px; left: 18px;
                transform: translateY(6px) rotate(-135deg);
            }
            &:nth-of-type(2) {
                opacity: 0;
            }
            &:nth-of-type(3) {
                width: 30%;
                top: 30px; left: 18px;
                transform: translateY(-6px) rotate(135deg);
            }
        }
    }
}
</style>