<script>
import { slide } from 'svelte/transition';

let current = 'foo';
	let visible = true;
	let sections = [
		{
			id: 1,
            title: "Question 1",
            question: "FAQ-1",
			content: "FAQ Explanation",
			active: false,
		},
		{
			id: 2,
            title: "Question 2",
            question: "What is the timeline of the tournament?",
			content:`<p> Certe, inquam, pertinax non existimant oportere nimium nos amice et ultimum bonorum, quod summum bonum sit voluptatem sequi nesciunt, neque disputatione, quam interrogare aut fugit,</p><p>• ultimum bonorum, quod summum bonum sit voluptatem sequi nesciunt, neque</p><p>• quam interrogare aut fugit, sed ut enim ipsam.</p>`,
			active: false,
        }
	]
	
	const expand = (section) => {
		sections = sections.map(s => {
            s.active = false
			if (s.id === section.id) {
                s.active = true;
			}
			return s
		})
    }
    
    const close = (section) => {
		sections = sections.map(s => {
			if (s.id === section.id) {
                s.active = false;
			}
			return s
		})
    }
</script>

<section class="main-section">
</section>

    <div class="container">
        <div class="support-group">
            {#each sections as section}
                <div class="accordion">
	                <button class="qus-txt {section.id}"
                    on:click={() => expand(section) }>
                    {section.title}
                    <div class="plus">
                        <img class="open-ans" src="images/plus.png" alt="open">
                    </div>
                    </button>
	                {#if section.active}
		                <div class="slider" transition:slide>
			             <span class="question">{section.question}</span>
                        <img 
                        on:click={() => close(section) } class="close-ans" src="images/minus.png" alt="open">
			             <div class="content">{@html section.content}</div>
		             </div>
	                {/if}
                </div>
                <hr>
            {/each}

        </div>
    </div>


<style>
	.main-section {
		background: #3253dc;
		height: 200px;
	}

    .qus-txt {
        border:none;
        background: transparent;
        font-size: 1.5rem;
        line-height: 25px;
        font-family: 'Qualcomm Next';
        font-weight: 500;
        color:#0b2742;
        outline: none;
        margin:20px 0;
    }

	.accordion {
		margin-bottom: 10px;
	}
    
	.slider, .question, .content{
		font-family: 'Qualcomm Next';
        font-size: 1.5rem;
        line-height: 25px;
        font-weight: 500;
		background-color: white;
		color: #0b2742;
	}

    .content {
        font-weight: 400;
        font-size: 1.125rem;
        margin-top: 20px;
    }

    .open-ans {
        margin-left: 40px;
        width: 25px;
        height: 25px;
    }

    .support-group {
        padding: 40px 50px 0 50px;
    }

    .close-ans {
        opacity: 0.2;
        width: 25px;
        height: 25px;
    }

    .plus {
        float: right;
    }

</style>