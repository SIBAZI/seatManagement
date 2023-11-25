// リアルタイムコラボレーションのプラグイン
TogetherJS( this );
$(() => {
    // メイン処理
    const main = () => {
      // 追加ボタンを押した時の処理
      $('#submit-button').click(function() {
        // 文字数が1文字以上ない場合アラートして処理を打ち切る
        if ($('#name-text').val().length <= 0) {
          alert("文字が入力されていません。")
          return;
        }
        // リストを追加する
        addTasks($('#name-text').val());
        // 入力欄を空にする
        $('#name-text').val('');
      });
      // Enterを押した時に追加ボタンのアクションと同じ動きをさせる
      $('#name-text').keypress(function(e){
        if(e.which == 13){
          $('#submit-button').click();
          return false;
        }
      });
    };
    const addTasks = (taskText) => {
        // ドラッグするリストの要素を作成
        const item =
          $('<li>').text('・').append().draggable({
            start() {
              $(this).addClass('dragNow');
            },
            stop() {
              $(this).removeClass('dragNow');
            } 
          });
          $('.situation1').droppable({
            over: function() {
              $("li").remove();
            }
          });
          // Text部分設定
          const div = $('<div>').text(taskText).css('padding','0 5px').css('width', '100%').css('background', '#fff565');
        // 削除ボタン作成
        const deleteBtn = $('<button>').text('✕').css('background','silver').click(() => {
          $(item).remove();
        });
         // divをitemに追加する
         $(item).append(div);
         // 削除ボタンをitemに追加する
        $(item).append(deleteBtn);
        // 作った要素をリストに追加
        $('.name-list').append(item);
      };
    
      main();
    });