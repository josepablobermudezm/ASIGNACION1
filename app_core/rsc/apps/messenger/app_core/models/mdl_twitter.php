<?php
	
   //requerimos de la conexion a la BD
   require_once(__CON_PATH . "conexion.php");

	class MDL_twitter{ 
	
		private $conexion;
		 	 
		public function __construct(){
			$this->conexion = new Conexion();	   
		} 	

		//Función para obtener registros
	    public function get_tweets(){ 

			$this->conexion->consulta("SELECT tbl_posts.id, tbl_posts.post,tbl_posts.date, tbl_posts.id_respuesta, tbl_posts.id_tweet_original FROM tbl_posts WHERE tbl_posts.id_tweet_original = 0 
									   ORDER BY tbl_posts.id DESC");

			$posts=array(); //matriz
			$num_fila=0;

			//obtenemos cada registro y cada campo
			while ($fila = $this->conexion->extraer_registro()) {
		          $posts[$num_fila][0] = $fila[0]; //id
		          $posts[$num_fila][1] = $fila[1]; //detalle del post
		          $posts[$num_fila][2] = $fila[2]; //fecha
		          $posts[$num_fila][3] = $fila[3]; // id respuesta
				  $posts[$num_fila][4] = $fila[4]; // id origen
		          $num_fila++;
			}
			
			return $posts;
		}

		public function buscar_tweets($datospost = array()){ 

			$this->conexion->consulta("SELECT tbl_posts.id, tbl_posts.post,tbl_posts.date, tbl_posts.id_respuesta, tbl_posts.id_tweet_original
									   FROM tbl_posts WHERE tbl_posts.post LIKE '".$datospost[0]."%' ORDER BY tbl_posts.id DESC");

			
		}

		//Función para insertar registros

	    public function insertar_post($datospost = array()){ 
			$this->conexion->consulta("INSERT INTO tbl_posts (post, date) 
									   VALUES ('" . $datospost[0] . "','" . date('Y-m-d H:i:s') . "')");    
	    }

	   	public function eliminar_post($idpost){ 
			$this->conexion->consulta("DELETE FROM tbl_posts
									   WHERE tbl_posts.id = " . $idpost);    
	    }

	   	public function editar_post($datospost = array()){ 
			$this->conexion->consulta("UPDATE tbl_posts SET post = '$datospost[1]', date = '" . date('Y-m-d H:i:s') . "' WHERE id = $datospost[0]");    
		}
		
		public function insertar_Resp($datospost = array(), $id_respuesta, $id_origen){
			$this->conexion->consulta("INSERT INTO tbl_posts (post, date, id_respuesta, id_tweet_original) 
									   VALUES ('" . $datospost[0] . "','" . date('Y-m-d H:i:s') . "',$id_respuesta, $id_origen)");
		}

		public function filter_posts($id){
			$this->conexion->consulta("SELECT tbl_posts.id, tbl_posts.post,tbl_posts.date, tbl_posts.id_respuesta, tbl_posts.id_tweet_original
			FROM tbl_posts WHERE tbl_posts.id_tweet_original LIKE $id");

			$posts=array(); //matriz
			$num_fila=0;

			//obtenemos cada registro y cada campo
			while ($fila = $this->conexion->extraer_registro()) {
				$posts[$num_fila][0] = $fila[0]; //id
				$posts[$num_fila][1] = $fila[1]; //detalle del post
				$posts[$num_fila][2] = $fila[2]; //fecha
				$posts[$num_fila][3] = $fila[3]; // id respuesta
				$posts[$num_fila][4] = $fila[4]; // id origen
				$num_fila++;
			}

			return $posts;
		}

		public function filter_eliminar($id){
			$this->conexion->consulta("SELECT tbl_posts.id, tbl_posts.post,tbl_posts.date, tbl_posts.id_respuesta, tbl_posts.id_tweet_original
			FROM tbl_posts WHERE tbl_posts.id_respuesta LIKE $id");

			$posts=array(); //matriz
			$num_fila=0;

			//obtenemos cada registro y cada campo
			while ($fila = $this->conexion->extraer_registro()) {
				$posts[$num_fila][0] = $fila[0]; //id
				$posts[$num_fila][1] = $fila[1]; //detalle del post
				$posts[$num_fila][2] = $fila[2]; //fecha
				$posts[$num_fila][3] = $fila[3]; // id respuesta
				$posts[$num_fila][4] = $fila[4]; // id origen
				$num_fila++;
			}

			return $posts;
		}
	}
?>

