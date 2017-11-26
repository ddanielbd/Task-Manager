<?php


class Task extends Eloquent  {


	protected $table = 'task';

    public $fillable = [
        'task_name',
        'date',
        'completed'
    ];
}

?>