<template>
   <div class="row">
      <h1>Tweet Content</h1>
		 <div class="col-md-12">
		    <div class="blog-comment">
				<h5 class="text-success">Tweet</h5>
        <div v-for="tw in tweet" v-bind:key="tw._id">
          <ul class="comments">
            <li class="clearfix">
              <img src="https://bootdey.com/img/Content/user_1.jpg" class="avatar" alt="">
              <div class="post-comments">
                  <p class="meta">{{tw.created}} <a href="#">{{tw.user.name}}</a> says</p> 
                  <p>
                      {{tw.content}}
                  </p>
                  <button type="button" class="btn btn-xs btn-ligth" data-toggle="modal" data-target="#editTweetModal" v-if="token && answer.isHim" @click="setAnswerData(answer)"><i class="fas fa-pencil-alt"></i></button>&nbsp;
              </div>
          </li>
          </ul>
        </div>  


      <div class="modal fade" id="editTweetModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
    
            <div class="modal-header">
              <h4 class="modal-title">Edit Answer</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
          
            <div class="modal-body">

              <div class="container">
                <form>
                  <div class="form-group">
                    <label for="title">Answer:</label>
                    <div class="col-lg">
                      <textarea class="form-control" rows="3" v-model="answerEditContent"></textarea>
                    </div>
                  </div>
                </form>

              </div>

            </div>
            
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateAnswer">Edit Answer</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal" @click="isLoadEdit = false">Close</button>
            </div>
          </div>
         </div>  
        </div> 


			</div>
		</div>
	</div>
  
</template>
     
<script>
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export default {
  props: ['id'],
  data () {
    return {
      tweet: {},
      created: '',
      isLoad: false,
      tweet: '',
      tweetEditContent: '',
      tweetId: ''
    }
  },
  created () {
    this.getTweet()
  },
  watch: {
    id: function () {
      this.getTweet()
    },
    editStat () {
      this.getTweet()
    }
  },
  computed: {
    token () {
      return this.$store.state.token
    },
    editStat () {
      return this.$store.state.editStat
    },
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    getTweet () {
      let self = this
      axios({
        method: 'get',
        url: `${baseUrl}/tweet/getall`
      })
        .then(response => {
            this.tweet=response.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.blog-comment::before,
.blog-comment::after,
.blog-comment-form::before,
.blog-comment-form::after{
    content: "";
	display: table;
	clear: both;
}

.blog-comment{
    padding-left: 15%;
	padding-right: 15%;
}

.blog-comment ul{
	list-style-type: none;
	padding: 0;
}

.blog-comment img{
	opacity: 1;
	filter: Alpha(opacity=100);
	-webkit-border-radius: 4px;
	   -moz-border-radius: 4px;
	  	 -o-border-radius: 4px;
			border-radius: 4px;
}

.blog-comment img.avatar {
	position: relative;
	float: left;
	margin-left: 0;
	margin-top: 0;
	width: 65px;
	height: 65px;
}

.blog-comment .post-comments{
	border: 1px solid #eee;
    margin-bottom: 20px;
    margin-left: 85px;
	margin-right: 0px;
    padding: 10px 20px;
    position: relative;
    -webkit-border-radius: 4px;
       -moz-border-radius: 4px;
       	 -o-border-radius: 4px;
    		border-radius: 4px;
	background: #fff;
	color: #6b6e80;
	position: relative;
}

.blog-comment .meta {
	font-size: 13px;
	color: #aaaaaa;
	padding-bottom: 8px;
	margin-bottom: 10px !important;
	border-bottom: 1px solid #eee;
}

.blog-comment ul.comments ul{
	list-style-type: none;
	padding: 0;
	margin-left: 85px;
}

.blog-comment-form{
	padding-left: 15%;
	padding-right: 15%;
	padding-top: 40px;
}

.blog-comment h3,
.blog-comment-form h3{
	margin-bottom: 40px;
	font-size: 26px;
	line-height: 30px;
	font-weight: 800;
}
</style>
