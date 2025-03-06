/**
 * 名前空間です。
 *
 * @type {Object}
 */
var Schedule = {

	available : 'glyphicon glyphicon-ok',
	notAnswered : 'glyphicon glyphicon-edit',
	notConfirmed : 'glyphicon glyphicon-exclamation-sign',
	notReserved : 'glyphicon glyphicon-plus',

	refetch : function()
	{
		$('#eventcalendar').fullCalendar('refetchEvents');
	},

	init : function()
	{
		$('#eventcalendar').fullCalendar({
			header : {
				left : 'today',
				center : 'prev, title, next',
				right : 'agendaWeek, month, listMonth'
			}, // ヘッダーの表示内容
			height : 1800, // カレンダー自体の高さ
			contentHeight : 600, // カレンダー領域の高さ（heightのほうが高い場合にはスクロールが発生する）
			editable : false, // スケジュール編集可否
			eventLimit : true, // 月表示でスケジュール数が多くなった場合に「他～件」と表示するか
			allDaySlot : false, // 週表示で終日のスケジュール表示用の枠を表示するか
			locale : 'ja', // 言語ロケール
			defaultView : 'agendaWeek', // デフォルト表示モード
			businessHours : {
				// 営業日の設定により色分けが可能
				dow : [
						1, 2, 3, 4, 5
				], // 営業日
				start : '06:00', // 営業開始時間
				end : '21:00', // 営業終了時間
			},
			buttonIcons : {
				prev : 'left-single-arrow',
				next : 'right-single-arrow',
			}, // 日付移動アイコン
			buttonText : {
				today : '本日',
				month : '月',
				week : '週',
				list : '月（リスト）'
			}, // ボタン表示テキスト
			eventBorderColor : '#000000', // イベントの枠線色
			eventTextColor : '#000000', // イベントの文字色
			timeFormat : 'HH:mm', // 時刻表示フォーマット
			noEventsMessage : '日程がありません', // リスト表示で何も日程がない場合に表示する文字列
			selectable : false, // 選択可能か
			listDayFormat : 'MM月DD日', // リスト表示での日付フォーマット
			slotLabelFormat : 'HH:mm', // 週表示の時間枠フォーマット
			slotEventOverlap : true, // 週表示でスケジュールを重ねて表示するかどうか
			columnFormat : 'MM/DD ddd', // 週表示の左側の時間表示フォーマット
			scrollTime : "06:00:00", // デフォルトで開いたときにどこまでスクロールさせておくか
			minTime : "00:00:00",
			maxTime : "24:00:00",
			eventOrder : '', // デフォルトは日程のtitle。公式には記載はないが''だと記載順
			events : {
				url : 'schedule/list.json',
				data : function()
				{ // a function that returns an object
					return {
						dspj : $('#dspj').val()
					};
				}
			},
			loading : function()
			{
				$('a.fc-event').click(function(e)
				{
					e.preventDefault();
				});
			},
			eventClick : function(calEvent, jsEvent, view)
			{
				$('#scheduleModalTitle').text(calEvent.start._i.substring(0, 10));
				$('#scheduleModalLabel').text(calEvent.start._i.substring(11, 16) + '-' + calEvent.end._i.substring(11, 16));
				$('#scheduleModalContent').text(calEvent.title);
				$('#modalScheduleLink').attr('href', calEvent.url);
				$('#scheduleModal').modal('show');
				jsEvent.preventDefault();
			},
			eventAfterAllRender : function(view)
			{
				if (view.name === 'listMonth')
				{
					$('tr').each(function()
					{
						var span = $(this).find('.fc-event-dot');
						if ($(this).hasClass('available'))
						{
							span.addClass(Schedule.available);
							span.removeClass('fc-event-dot');
						}
						else if ($(this).hasClass('notAnswered'))
						{
							span.addClass(Schedule.notAnswered);
							span.removeClass('fc-event-dot');
						}
						else if ($(this).hasClass('notConfirmed'))
						{
							span.addClass(Schedule.notConfirmed);
							span.removeClass('fc-event-dot');
						}
						else if ($(this).hasClass('notReserved'))
						{
							span.addClass(Schedule.notReserved);
							span.removeClass('fc-event-dot');
						}
					});
				}
			}
		});
	}
}
/**
 * DOM読込完了時処理。
 */
$(document).ready(function()
{
	Schedule.init();

	$('.showSchedule').click(function()
	{
		$(this).hide();
		$('.hideSchedule').show();
		$('#dspj').val('1');
		Schedule.refetch();
	});

	$('.hideSchedule').click(function()
	{
		$(this).hide();
		$('.showSchedule').show();
		$('#dspj').val('0');
		Schedule.refetch();
	});
});

/**
 * ページ読込完了時処理。
 */
$(window).load(function()
{

});
