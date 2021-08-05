<script>
    import LeftBanner from './partials/Leftbanner.svelte';
    export let title = '';
    export let step = '';
</script>
<div class="row no-gutters full-height">
   <div class="col-lg-6 col-sm-12 col-xs-12">
       <LeftBanner />
   </div>
   <div class="col-lg-6 col-sm-12 col-xs-12">
      <div class="scroll-box">
       <div class="form-box">
            {#if step}
            <small class="no-of-steps">STEP {step} OF 4</small>
            {/if}
           <h1 class="main-heading">
               {title}
           </h1>
           <div class="col-12 no-padding">
               <slot></slot>
           </div>
           
         <div class="info-txt">
          <div class="right-side-links">
            <ul>
              <li>
                <a href="https://www.qualcomm.com/site/terms-of-use" target="_blank">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="https://www.qualcomm.com/site/privacy" target="_blank">
                  Privacy
                </a>
              </li>
              <li>
                <a href="https://www.qualcomm.com/company/about" target="_blank">
                  About Qualcomm
                </a>
              </li>
              <li>
                <a href="/rulebook.pdf" target="_blank">
                  Rulebook
                </a>
              </li>
            </ul>
            <p class="copyrights-txt">
              &#169;2020 Qualcomm Technologies, Inc. and/or its affiliated companies.
            </p>
          </div>
            <p>
              The Qualcomm Snapdragon Conquest tournament is sponsored by Qualcomm Technologies, Inc. and/or its subsidiaries. Qualcomm Snapdragon is a product of Qualcomm Technologies, Inc. and or its subsidiaries
            </p>
             <p>
                 References to "Qualcomm" may mean Qualcomm Incorporated, or subsidiaries or business units within the Qualcomm corporate structure, as applicable.
             </p>
             <p class="no-margin">
                 Qualcomm Incorporated includes Qualcomm's licensing business, QTL, and the vast majority of its patent portfolio. Qualcomm Technologies, Inc., a wholly-owned subsidiary of Qualcomm Incorporated, operates, along with its subsidiaries, substantially all of Qualcomm's engineering, research and development functions, and substantially all of its products and services businesses. Qualcomm products referenced herein are products of Qualcomm Technologies, Inc. and/or its subsidiaries.
             </p>
         </div>
       </div>
      </div>
   </div>
</div>
<style>
  .scroll-box{
    height: 100vh;
    overflow-y: auto;
  }

  .form-box{
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    height: auto;
  }
  .right-side-links, .info-txt{
    margin-top: auto;
  }

  .info-txt {
    width: 100%;
    padding: 2em 0;
  }
</style>