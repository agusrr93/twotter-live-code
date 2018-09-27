<template>
    <div class="home">
        <br><br><br><br>
    <div class="container">
      <div class="row">
          <div class="col-lg-3">
          </div>

          <div class="card  mb-3" style="max-width: 18rem;">
            <div class="card-body">
              <input type="text" placeholder="Search...">
              <button class="btn-info">Search</button>
            </div>
          </div>

          <div class="card  mb-3" style="max-width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Recently Followed</h5>
              <ul id="recently-followed">
                <li>
                  <a href="#">infobandung</a>
                </li>
                <li>
                  <a href="#">pramborsfm</a>
                </li>
                <li>
                  <a href="#">thebalibible</a>
                </li>
                <li>
                  <a href="#">threewisemonkeys</a>
                </li>
                <li>
                  <a href="#">sushitei</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
            
        <div class="col-lg-6">
  <!-- /.row -->  
                <Content></Content>
        </div>
        <!-- /.col-lg-6 -->

            
        </div>
        <!-- /.col-lg-3 -->
          
      </div>

    


</template>

<script>
import Content from '../components/Content.vue'
export default {
  components: {
    Content
  }
}
</script>
